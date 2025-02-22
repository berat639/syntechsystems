import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

export const Card = React.memo(({ 
  thumbnail,
  header,
  subhead,
  media,
  supportingText,
  buttons = [],
  icons = [],
  className = '',
  disabled = false,
  loading = false,
  animationDirection = 'left',
  onClick,
  onMediaLoad,
  children
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleMediaLoad = useCallback(() => {
    onMediaLoad?.();
  }, [onMediaLoad]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const animationClasses = useMemo(() => ({
    left: 'hover:-translate-x-2',
    right: 'hover:translate-x-2',
    up: 'hover:-translate-y-2',
    down: 'hover:translate-y-2',
  }), []);

  const cardClassName = useMemo(() => `
    relative overflow-hidden rounded-xl
    before:absolute before:inset-0 before:rounded-xl
    before:bg-gradient-to-br before:from-white/10 before:to-white/5
    dark:before:from-white/5 dark:before:to-white/0
    before:backdrop-blur-xl before:-z-10
    border border-white/20 dark:border-white/10
    shadow-lg shadow-black/5 dark:shadow-white/5
    transition-transform duration-300
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${animationClasses[animationDirection] || ''}
    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    ${isHovered ? 'before:from-white/15 before:to-white/10 dark:before:from-white/10 dark:before:to-white/5' : ''}
    ${className}
  `, [disabled, animationDirection, isLoaded, isHovered, className, animationClasses]);

  const renderThumbnail = useMemo(() => {
    if (!thumbnail) return null;
    return (
      <div className="mb-4">
        {typeof thumbnail === 'string' ? (
          <img
            src={thumbnail}
            alt={`${header || 'Card'} thumbnail`}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 dark:ring-white/10"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        ) : (
          thumbnail
        )}
      </div>
    );
  }, [thumbnail, header]);

  const renderMedia = useMemo(() => {
    if (!media) return null;
    return (
      <div className="mb-4 overflow-hidden rounded-lg ring-1 ring-white/10 dark:ring-white/5">
        {typeof media === 'string' ? (
          <img
            src={media}
            alt={`${header || 'Card'} media`}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            onLoad={handleMediaLoad}
          />
        ) : (
          media
        )}
      </div>
    );
  }, [media, header, handleMediaLoad]);

  const renderButtons = useMemo(() => {
    if (!buttons?.length) return null;
    return (
      <div className="flex flex-wrap gap-3 mt-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              button.onClick?.();
            }}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition-all duration-200
              ${index === 0 
                ? 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20' 
                : 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50'}
            `}
            aria-label={button.label}
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  }, [buttons, disabled]);

  const renderIcons = useMemo(() => {
    if (!icons?.length) return null;
    return (
      <div className="flex gap-2 mt-4" role="group" aria-label="Card actions">
        {icons.map((icon, index) => (
          <span
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              icon.onClick?.();
            }}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
            role="button"
            tabIndex={0}
          >
            {icon.component}
          </span>
        ))}
      </div>
    );
  }, [icons]);

  return (
    <article
      ref={cardRef}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cardClassName}
      aria-disabled={disabled}
      role="article"
    >
      {loading && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5 animate-shimmer"
          role="progressbar"
          aria-busy="true"
        />
      )}

      <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 flex flex-col justify-center">
          {renderThumbnail}

          {header && (
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 drop-shadow-sm">
              {header}
            </h2>
          )}

          {subhead && (
            <h3 className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {subhead}
            </h3>
          )}

          {supportingText && (
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              {supportingText}
            </p>
          )}

          {children}

          {renderButtons}
          {renderIcons}
        </div>

        {renderMedia && (
          <div className="flex-1 md:max-w-[50%]">
            {renderMedia}
          </div>
        )}
      </div>
    </article>
  );
});

Card.displayName = 'Card';