import React, { useRef, useEffect, useState, useMemo, lazy, Suspense, useCallback } from 'react';
import * as THREE from 'three';
import locations from '../../utils/random-locations.json';
import { useTheme } from '../../context/ThemeContext';
 
const Globe = lazy(() => import('react-globe.gl').then(module => ({
  default: React.memo(module.default)
})));

const min = 800;
const max = 3000;
 

const generateArcsData = () => {
  return Array.from({ length: 100 }, () => {
    const randStart = Math.floor(Math.random() * locations.length);
    const randEnd = Math.floor(Math.random() * locations.length);
    const randTime = Math.floor(Math.random() * (max - min + 1) + min);
    const separationDistance = Math.random() * 1.0 + 0.5;
    const direction = Math.random() * 2 * Math.PI;
    
    return {
      startLat: locations[randStart].lat,
      startLng: locations[randStart].lng,
      endLat: locations[randEnd].lat + separationDistance * Math.sin(direction),
      endLng: locations[randEnd].lng + separationDistance * Math.cos(direction),
      time: randTime,
      color: ["#00225500", "#40ffff", "#00225500"],
      separation: separationDistance,
      direction: direction,
    };
  });
};

const Map = React.memo(() => {
  const { isDarkMode, currentTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, []);
  
  const globeRef = useRef();
  const shiftFactor = 0.4;
  const shiftAmount = typeof window !== 'undefined' ? shiftFactor * windowSize.width : 0;

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
      } catch (error) {
        console.error('Error loading globe data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const pointsData = useMemo(() => locations, []);
  const arcsData = useMemo(() => generateArcsData(), []);
  
  const globeMaterial = useMemo(() => new THREE.MeshPhongMaterial({
    color: currentTheme.globe.material.color,
    opacity: currentTheme.globe.material.opacity,
    transparent: true,
    emissive: currentTheme.globe.material.emissive,
    emissiveIntensity: currentTheme.globe.material.emissiveIntensity,
    shininess: currentTheme.globe.material.shininess,
  }), [isDarkMode]);
 

  const labelAltitude = useCallback((d) => {
    if (d.name === "Istanbul") return 0.08;
    if (d.name === "Ankara") return 0.12;
    if (d.name === "Izmir") return 0.06;
    return 0.04;
  }, []);

  const handleGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
     const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.enablePan = false;
    controls.enableRotate = windowSize.width > 768;
    controls.enableZoom = windowSize.width > 768;
    controls.autoRotateSpeed = 3;
    globeRef.current.pointOfView({
      lat: 30,
      lng: 30,
      altitude: windowSize.width <= 768 ? 2.5 : 2,
    });
  }, [windowSize.width]);

  const pointColor = useCallback(() => currentTheme.globe.points.color, [currentTheme]);
  const labelColor = useCallback(() => currentTheme.globe.points.label, [currentTheme]);
  
  if (typeof window === 'undefined' || !isMounted) {
    return (
      <section 
        className="relative w-full h-screen pt-16" 
        aria-label="Interactive 3D Globe Visualization"
        role="region"
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative w-full h-screen pt-16" 
      aria-label="Interactive 3D Globe Visualization"
      role="region"
    >
      <div className="w-full h-full relative">
        {isLoading && (
          <div 
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
            role="progressbar"
            aria-busy="true"
            aria-label="Loading globe visualization"
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <Suspense fallback={
          <div 
            className="w-full h-full flex items-center justify-center bg-gray-900"
            role="progressbar"
            aria-busy="true"
            aria-label="Loading globe component"
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <div style={{
            marginLeft: `-${shiftAmount + 15}px`
          }}>
            <Globe
              globeImageUrl={isDarkMode ? "//unpkg.com/three-globe/example/img/earth-night.jpg" : "https://unpkg.com/three-globe@2.41.10/example/img/earth-day.jpg"} 
              ref={globeRef}
              width={windowSize.width + shiftAmount}
              height={windowSize.height}
              pointAltitude={0.01}
              pointRadius={0.5}
              pointColor={pointColor}
              onGlobeReady={handleGlobeReady} 
              backgroundColor={currentTheme.globe.background}
              rendererConfig={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance",
                preserveDrawingBuffer: false,
                precision: "mediump",
                sortObjects: true
              }}
              globeMaterial={globeMaterial}
              atmosphereColor={currentTheme.globe.atmosphere.color}
              atmosphereAltitude={currentTheme.globe.atmosphere.altitude} 
              pointsMerge={true}
              pointScale={0.001}
              pointResolution={2}
              labelsData={pointsData}
              labelIncludeDot
              labelText="name"
              labelSize={windowSize.width <= 768 ? 1.5 : 2}
              labelDotRadius={0.2}
              labelColor={labelColor}
              labelAltitude={labelAltitude}
              arcsData={arcsData}
              arcAltitudeAutoScale={0.6}
              arcColor="color"
              arcStroke={0.5}
              arcDashLength={0.9}
              arcAltitude={0.4}
            />
          </div> 
        </Suspense>
      </div>
    </section>
  );
});

Map.displayName = 'Map';

export { Map };