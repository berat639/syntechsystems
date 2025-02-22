import React from 'react';
import locations from '../../utils/random-locations.json';

export const MapListCard = React.memo(() => {
  return (
    <ul className="space-y-3">
      {locations.map((location) => (
        <li key={location.name} className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-gray-700 dark:text-gray-300">{location.name}</span>
        </li>
      ))}
    </ul>
  );
});

MapListCard.displayName = 'MapListCard';
 