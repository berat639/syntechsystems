import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = ({
  items = [],
  autoPlayInterval = 3000,
  className = '',
  showControls = true,
  showIndicators = true,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [items.length, autoPlayInterval]);

  const nextSlide = () => {
    setSelectedIndex((current) => (current + 1) % items.length);
  };

  const previousSlide = () => {
    setSelectedIndex((current) => (current - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="relative overflow-hidden">
          <Tab.Panels className="outline-none">
            {items.map((item, idx) => (
              <Tab.Panel
                key={idx}
                className={`
                  transform transition-all duration-500 ease-in-out
                  ${idx === selectedIndex ? 'opacity-100' : 'opacity-0 absolute top-0'}
                `}
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title || `Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                      {item.description && (
                        <p className="text-white/80 text-sm">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>

          {showControls && (
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={previousSlide}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white
                         hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white
                         hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {showIndicators && (
          <Tab.List className="flex justify-center gap-2 mt-4">
            {items.map((_, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `w-2 h-2 rounded-full transition-all duration-200 focus:outline-none
                  ${selected
                    ? 'bg-blue-500 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`
                }
              />
            ))}
          </Tab.List>
        )}
      </Tab.Group>
    </div>
  );
};

Carousel.displayName = 'Carousel';