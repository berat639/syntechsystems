const adjustColorTone = (hex, isLighten) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) + (isLighten ? 50 : -50);
  const g = ((bigint >> 8) & 0x00FF) + (isLighten ? 50 : -50);
  const b = (bigint & 0x0000FF) + (isLighten ? 50 : -50);
  const newColor = ((1 << 24) + (Math.min(255, Math.max(0, r)) << 16) + (Math.min(255, Math.max(0, g)) << 8) + Math.min(255, Math.max(0, b))).toString(16).slice(1);
  return `#${newColor}`;
};

const generateArcsData = (pointsData = [], min = 1000, max = 5000) => {
  if (!Array.isArray(pointsData) || pointsData.length === 0) {
    return [];
  }

  return Array.from({ length: 100 }, () => {
    const randStart = Math.floor(Math.random() * pointsData.length);
    const randEnd = Math.floor(Math.random() * pointsData.length);
    const randTime = Math.floor(Math.random() * (max - min + 1) + min);
    const separationDistance = Math.random() * 1.0 + 0.5;
    const direction = Math.random() * 2 * Math.PI;

    return {
      startLat: pointsData[randStart].lat,
      startLng: pointsData[randStart].lng,
      endLat: pointsData[randEnd].lat + separationDistance * Math.sin(direction),
      endLng: pointsData[randEnd].lng + separationDistance * Math.cos(direction),
      time: randTime,
      color: ['#00225500', '#40ffff', '#00225500'],
      separation: separationDistance,
      direction: direction,
    };
  });
};

export { adjustColorTone, generateArcsData };