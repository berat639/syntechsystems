import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker
} from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";



import locations from '../../utils/random-locations.json';

const cities = locations.map(location => ({
  name: location.name,
  coordinates: [location.lng, location.lat]
}));

const Map2d = () => {
  const [dimensions, setDimensions] = React.useState({
    scale: 140,
    centerY: 50
  });

  const [hasMounted, setHasMounted] = React.useState(false);

  const getCSSVal = (e, v) => e.style.getPropertyValue(v);
  const mod = (n, m) => ((n % m) + m) % m;
  const PI = Math.PI;
  const TAU = PI * 2;

  React.useEffect(() => {
    setHasMounted(true);
    if (window.innerWidth < 768) {
      setDimensions({
        scale: 200,
        centerY: 50
      });
    }

    const radar = (elRadar) => {
      const elBeam = elRadar.querySelector(".beam");
      const elsDot = elRadar.querySelectorAll(".dot");

      const update = () => {
        const beamAngle = parseFloat(getComputedStyle(elBeam).getPropertyValue("rotate")) * PI / 180 || 0;

        elsDot.forEach(elDot => {
          const x = getCSSVal(elDot, "--x") - 0.5;
          const y = getCSSVal(elDot, "--y") - 0.5;
          const dotAngle = mod(Math.atan2(y, x), TAU);
          const opacity = mod(dotAngle - beamAngle, TAU) / TAU;
          elDot.style.opacity = opacity;
        });

        requestAnimationFrame(update);
      };
      
      update();
    };

    document.querySelectorAll(".radar").forEach(radar);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        scale: window.innerWidth < 768 ? 200 : 180,
        centerY: window.innerWidth < 768 ? 50 : 80,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div 
      className="w-full h-full bg-white dark:bg-gray-900 overflow-hidden relative rounded-full border-2 border-cyan-200 dark:border-cyan-700" 
      style={{
        aspectRatio: '1',
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="radar w-[650px] h-[650px] rounded-full overflow-hidden">
          <div className="beam absolute inset-0 origin-center">
            <div className="w-[2px] h-1/2 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2 origin-bottom" />
            <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2 origin-left" />
          </div>
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-blue-500/10 dark:border-blue-400/10" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-500/20 dark:bg-blue-400/20" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-500/20 dark:bg-blue-400/20" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-2 -translate-y-2">
                <div className="w-full h-[2px] bg-blue-500 dark:bg-blue-400 absolute top-1/2 -translate-y-1/2" />
                <div className="h-full w-[2px] bg-blue-500 dark:bg-blue-400 absolute left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes rotate {
            100% {
              rotate: 1turn;
            }
          }
          .radar {
            position: relative;
            border: 2px solid rgba(0, 157, 255, 0.2);
          }
          .beam {
            animation: 5s rotate linear infinite;
          }
        `}
      </style>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: dimensions.scale,
          center: [29, 39],
          clipAngle: 360
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          padding: '0.5rem'
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EBF8FF"
                stroke="transparent"
                strokeWidth={0}
                style={{
                  default: {
                    outline: 'none',
                    fill: '#EBF8FF',
                    stroke: 'none'
                  },
                  hover: {
                    outline: 'none',
                    fill: '#EBF8FF',
                    stroke: 'none'
                  },
                  pressed: {
                    outline: 'none',
                    fill: '#EBF8FF',
                    stroke: 'none'
                  }
                }}
                className="dark:fill-cyan-800"
              />
            ))
          }
        </Geographies>



        {cities.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <g transform="translate(0, -2)">
              <circle r={6} fill="#3B82F6" fillOpacity={0.9} className="dark:fill-blue-400" />
              <circle
                r={12}
                fill="#3B82F6"
                fillOpacity={0.5}
                style={{
                  animation: "pulse 2s infinite",
                  filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.7))"
                }}
                className="dark:fill-blue-400 dark:fill-opacity-50"
              />
              <text
                textAnchor="middle"
                y={name === "Istanbul" ? 35 : name === "Ankara" ? 20 : 20}
                style={{ 
                  fontFamily: "system-ui",
                  fontSize: "12px",
                  fontWeight: "600",
                  textShadow: "0 0 12px rgba(0,0,0,0.9)"
                }}
                className="fill-gray-900 dark:fill-white"
              >
                {name}
              </text>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

Map2d.displayName = 'Map2d';

export { Map2d };
