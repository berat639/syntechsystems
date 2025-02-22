import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Camera position and controls setup with stereo effect
    const eyeSeparation = 0.1; // Subtle eye separation for stereo effect
    camera.position.set(0.5 + eyeSeparation/2, 1, 0.5);
    camera.lookAt(-2, -1, -2);

    // Add mouse movement controls with limited range
    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0
    };

    // Mouse event handlers with constrained movement
    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) {
        // Add subtle stereo effect based on mouse position
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        
        // Calculate stereo offset with constraints
        const maxStereoOffset = 0.05;
        const stereoX = mouseX * maxStereoOffset;
        const stereoY = mouseY * maxStereoOffset;
        
        // Apply smooth stereo movement
        camera.position.x = 0.5 + eyeSeparation/2 + stereoX;
        camera.position.y = 1 + stereoY;
        camera.lookAt(-2, -1, -2);
        return;
      }

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      // Adjusted sensitivity for smoother rotation
      const rotationSensitivity = 0.0005;

      // More constrained vertical rotation with smoother limits
      const verticalRotation = camera.rotation.x + deltaMove.y * rotationSensitivity;
      const verticalLimit = 0.04; // Increased limit for more natural movement
      if (verticalRotation > -verticalLimit && verticalRotation < verticalLimit) {
        camera.rotation.x = verticalRotation;
      }

      // Enhanced horizontal rotation with smoother constraints
      const horizontalRotation = camera.rotation.y + deltaMove.x * rotationSensitivity;
      const horizontalLimit = 1; // Increased limit for better viewing range
      if (horizontalRotation > -horizontalLimit && horizontalRotation < horizontalLimit) {
        camera.rotation.y = horizontalRotation;
      }

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Terrain creation
    const terrainGeometry = new THREE.PlaneGeometry(30, 30, 128, 128);
    const terrainMaterial = new THREE.MeshBasicMaterial({
      color: '#22d3ee',
      wireframe: true,
      transparent: true,
      opacity: 0.09
    });

    // Add random elevation to terrain
    const vertices = terrainGeometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] = Math.sin(vertices[i] / 2) * Math.cos(vertices[i + 1] / 2) * 0.3;
    }
    terrainGeometry.attributes.position.needsUpdate = true;

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.rotation.x = -Math.PI / 2;
    scene.add(terrain);

    // Model loading
    const loader = new OBJLoader();
    // Create a custom shader material for iridescent wireframe effect
    const highlightMaterial = new THREE.ShaderMaterial({
      wireframe: true,
      transparent: true,
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.8 },
        intensity: { value: 1.5 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform float intensity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        vec3 hdrAdjust(vec3 color) {
          // HDR-like tone mapping
          return color / (1.0 + color);
        }
        
        vec3 rainbow(float level) {
          // Enhanced color spectrum
          vec3 base = 0.5 + 0.5 * cos(3.14159 * 2.0 * (level * vec3(1.0, 0.8, 0.6) + vec3(0.0, 0.33, 0.67)));
          
          // Increase color saturation
          vec3 saturated = pow(base, vec3(0.85));
          
          // Apply HDR-like intensity
          return saturated * intensity;
        }
        
        void main() {
          // Dynamic color mixing based on position and time
          float level = vPosition.x * 0.15 + vPosition.y * 0.15 + vPosition.z * 0.15 + time * 0.2;
          
          // Add normal-based variation for depth effect
          float normalFactor = dot(vNormal, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          level += normalFactor * 0.2;
          
          vec3 color = rainbow(level);
          
          // Apply HDR-like effect
          color = hdrAdjust(color);
          
          // Smooth color transitions
          color = mix(color, color * 1.2, sin(time) * 0.5 + 0.5);
          
          gl_FragColor = vec4(color, opacity);
        }
      `
    });

    // Load Nanopix model
    loader.load('/models/nanopix.f0fdcf0.obj', (nanopixModel) => {
      nanopixModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = highlightMaterial;
        }
      });
      nanopixModel.scale.set(0.6, 0.8, 0.8);
      nanopixModel.position.set(-1, 0.2 ,-0.2); // Positioned higher above rover
      scene.add(nanopixModel);
    });

    // Load Rover model
    loader.load('/models/rover.e786423.obj', (roverModel) => {
      roverModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = highlightMaterial;
        }
      });
      roverModel.scale.set(1, 1, 1);
      roverModel.position.set(-1, 2.1 -2);  // Positioned slightly lower
      scene.add(roverModel);
    });

    // Post-processing setup
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

  

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      // Update the time uniform for the iridescent effect
      const time = performance.now() * 0.001;
      highlightMaterial.uniforms.time.value = time;
      composer.render();
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[600px] md:h-[800px] lg:h-screen" />;
};

export default ThreeScene;