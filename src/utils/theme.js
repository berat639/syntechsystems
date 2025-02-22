const theme = {
  light: {
    background: '#ffffff',
    globe: {
      background: '#f0f7ff',
      material: {
        color: '#e6f3ff',
        emissive: '#b3d9ff',
        emissiveIntensity: 0.1,
        shininess: 0.5,
        opacity: 0.95
      },
      atmosphere: {
        color: '#b3e0ff',
        altitude: 0.25
      },
      points: {
        color: '#2080ff',
        label: 'white'
      },
      arcs: {
        colors: ['#00225500', '#2080ff', '#00225500']
      }
    }
  },
  dark: {
    background: '#001833',
    globe: {
      background: '#001833',
      material: {
        color: '#001833',
        emissive: '#003366',
        emissiveIntensity: 0.2,
        shininess: 0.7,
        opacity: 0.9
      },
      atmosphere: {
        color: 'skyblue',
        altitude: 0.25
      },
      points: {
        color: '#80ffff',
        label: '#40ffff'
      },
      arcs: {
        colors: ['#00225500', '#40ffff', '#00225500']
      }
    }
  }
};

export default theme;