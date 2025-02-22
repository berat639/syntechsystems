import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BrandCarousel = React.memo(({ 
  brands = [],
  autoPlayInterval = 5000,
  className = '',
  showControls = true,
  title = "Collaborative Partners"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerSlide = 6;

  const totalSlides = Math.ceil(brands.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [totalSlides, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [totalSlides, isTransitioning]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [totalSlides, autoPlayInterval, nextSlide]);

  if (!brands.length) return null;

  return (
    <div className="w-full py-12 bg-white dark:bg-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-blue-500 dark:text-blue-500 mb-8 md:mb-12 text-center" >
          {title}
        </h1>
        <div className={`relative overflow-hidden ${className}`}>
          <div className="relative w-full">
            <div
              className={`flex transition-transform duration-500 ease-in-out transform ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4"
                >
                  {brands.slice(
                    slideIndex * itemsPerSlide,
                    (slideIndex + 1) * itemsPerSlide
                  ).map((brand, index) => (
                    <div
                      key={`${slideIndex}-${index}`}
                      className="flex items-center justify-center p-4 bg-white/5 dark:bg-gray-800/5 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-300"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-24 w-auto object-contain filter dark:brightness-90 hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {showControls && totalSlides > 1 && (
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white
                         hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white
                         hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 transform hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

BrandCarousel.displayName = 'BrandCarousel';
 