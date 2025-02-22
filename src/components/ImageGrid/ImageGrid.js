import React from 'react';

export const ImageGrid = React.memo(({ 
  images = [],
  columns = 6,
  gap = 4,
  className = '',
  title = '',
  showTitle = true
}) => {
  if (!images.length) return null;

  return (
    <div className="w-full py-12 bg-white dark:bg-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && title && (
          <h2 className="text-6xl font-bold text-blue-500 dark:text-blue-500 mb-8 md:mb-12 text-center">
            {title}
          </h2>
        )}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-${gap} ${className}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white/5 dark:bg-gray-800/5 rounded-lg 
                       hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt || `Image ${index + 1}`}
                className="max-h-24 w-auto object-contain filter dark:brightness-90 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ImageGrid.displayName = 'ImageGrid';