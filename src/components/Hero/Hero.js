import React, { useState, useRef, useEffect, useMemo, useCallback, Suspense } from 'react';
import { Card } from '../Card';
import ErrorBoundary from '../ErrorBoundary';

const POSITIONS = {
  'top-left': 'items-start justify-start',
  'top-center': 'items-start justify-center',
  'top-right': 'items-start justify-end',
  'center-left': 'items-center justify-start',
  'center': 'items-center justify-center',
  'center-right': 'items-center justify-end',
  'bottom-left': 'items-end justify-start',
  'bottom-center': 'items-end justify-center',
  'bottom-right': 'items-end justify-end'
};

const SlideComponent = React.memo(({ component: Component, isVisible }) => {
  if (!isVisible) return null;
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="w-full h-full bg-gray-900 animate-pulse" />}>{Component}</Suspense>
    </ErrorBoundary>
  );
});

SlideComponent.displayName = 'SlideComponent';

export const Hero = React.memo(({ 
  slides = [],
  cards = [],
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
  contentClassName = '',
  buttonClassName = '',
  glassClassName = '',
  position = 'center',
  contentPosition = 'bottom-left',
  showGlassmorphism = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideTimerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const positionClasses = useMemo(() => 
    POSITIONS[position] || POSITIONS.center, [position]
  );

  const contentPositionClasses = useMemo(() => 
    POSITIONS[contentPosition] || POSITIONS['bottom-left'], [contentPosition]
  );

  useEffect(() => {
    if (!Array.isArray(slides) || slides.length === 0) return;
    setIsLoaded(true);
    
    if (slides.length > 1) {
      const startSlideTimer = () => {
        if (slideTimerRef.current) {
          clearInterval(slideTimerRef.current);
        }
        slideTimerRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
      };

      startSlideTimer();

      return () => {
        if (slideTimerRef.current) {
          clearInterval(slideTimerRef.current);
          slideTimerRef.current = null;
        }
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
          transitionTimeoutRef.current = null;
        }
      };
    }
  }, [slides]);

  const handleSlideChange = useCallback((index) => {
    if (index === currentSlide || !slides || slides.length <= 1) return;
    
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    requestAnimationFrame(() => {
      setIsTransitioning(true);
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);

        slideTimerRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
      }, 300);
    });
  }, [currentSlide, slides]);

  const renderSlides = useMemo(() => {
    if (!Array.isArray(slides) || slides.length === 0) return null;
    
    const currentSlideData = slides[currentSlide];
    const isFullScreen = currentSlideData?.fullScreen !== false;
    const bgColor = currentSlideData?.backgroundColor || 'transparent';
    
    return (
      <div className={`${isFullScreen ? 'absolute inset-0' : 'relative h-[600px]'}`} style={{ backgroundColor: bgColor }}>
        {slides.map((slide, index) => (
          <div key={`slide-${index}`} className={`absolute inset-0 ${index === currentSlide ? '' : 'hidden'}`}>
            {slide.component ? (
              <SlideComponent
                component={slide.component}
                isVisible={index === currentSlide}
                isDarkMode={showGlassmorphism}
              />
            ) : (
              <div 
                className="w-full h-full transition-colors duration-300"
                style={{ backgroundColor: slide.backgroundColor || bgColor }}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0" />
      </div>
    );
  }, [slides, currentSlide]);

  const renderContent = useMemo(() => {
    if (!Array.isArray(slides) || slides.length === 0) return null;

    const currentSlideData = slides[currentSlide];
    if (!currentSlideData) return null;

    const currentSlideCards = Array.isArray(cards) && cards[currentSlide] ? cards[currentSlide] : [];

    if (currentSlideCards.length > 0) {
      return (
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto h-auto pt-24 px-6 w-full h-screen">
          {currentSlideCards.map((card, index) => (
            <div key={`card-${index}`} className={`${card.width || 'md:w-64'} ${card.position === 'bottom-right' ? 'ml-auto mt-auto mb-24' : ''} ${card.position === 'left' ? 'mr-auto' : card.position === 'right' ? 'ml-auto' : ''}`}>
              <Card
                {...card}
                animationDirection={card.position === 'right' ? 'right' : 'left'}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={`
        ${showGlassmorphism ? `
          space-y-6 rounded-xl p-8
          before:absolute before:inset-0 before:rounded-xl
          before:bg-gradient-to-br before:from-white/10 before:to-white/5
          dark:before:from-white/5 dark:before:to-white/0
          before:backdrop-blur-xl before:-z-10
          relative overflow-hidden
          border border-white/20 dark:border-white/10
          shadow-lg shadow-black/5 dark:shadow-white/5
          hover:before:from-white/15 hover:before:to-white/10
          dark:hover:before:from-white/10 dark:hover:before:to-white/5
          transition-all duration-300
        ` : ''}
        ${glassClassName}
      `}>
        {currentSlideData?.title && (
          <h1 className="text-3xl md:text-5xl max-w-[30rem] font-medium text-white dark:text-white drop-shadow-lg">
            {currentSlideData.title}
          </h1>
        )}
        {currentSlideData?.description && (
          <p className="max-w-[30rem] font-light ml-4 text-white/90 dark:text-white/90 before:content-[''] relative before:absolute before:w-px before:h-full before:left-0 before:top-0 before:-translate-x-4 before:bg-blue-500 dark:before:bg-blue-400 before:glow-blue-500/50 md:text-base text-sm">
            {currentSlideData.description}
          </p>
        )}
        {(primaryButtonText || secondaryButtonText) && (
          <div className={`md:flex-row flex-col flex gap-4 ${buttonClassName}`}>
            {primaryButtonText && (
              <button
                onClick={onPrimaryClick}
                className="inline-block text-base font-medium px-12 py-3 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white dark:text-white rounded-lg cursor-pointer transition-all duration-200 backdrop-blur-lg hover:shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                {primaryButtonText}
              </button>
            )}
            {secondaryButtonText && (
              <button
                onClick={onSecondaryClick}
                className="inline-block text-base font-medium px-12 py-3 border border-white/30 dark:border-white/20 rounded-lg text-white dark:text-white/90 cursor-pointer bg-white/10 dark:bg-white/5 backdrop-blur-3xl hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/50 dark:hover:border-white/30 transition-all duration-200 shadow-lg shadow-black/5 dark:shadow-black/10"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }, [slides, currentSlide, cards, showGlassmorphism, glassClassName, primaryButtonText, secondaryButtonText, buttonClassName, onPrimaryClick, onSecondaryClick, position]);

  return (
    <div className="relative min-h-[120vh] md:min-h-screen w-full">
      {renderSlides}

      <div className="relative max-w-[120rem] mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-10 flex ${positionClasses}">
        <div className={`w-full flex flex-col sm:flex-row ${contentPositionClasses} relative space-y-4 sm:space-y-6 ${contentClassName}`}>
          {renderContent}
        </div>
      </div>

      {Array.isArray(slides) && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20" role="navigation" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={`nav-${index}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white dark:bg-white w-6' : 'bg-white/50 dark:bg-white/40 hover:bg-white/75 dark:hover:bg-white/60'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

Hero.displayName = 'Hero';