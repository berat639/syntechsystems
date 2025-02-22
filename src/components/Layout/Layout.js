import React, { useEffect } from 'react';
import { Header } from '../Header';
import Footer from '../Footer/Footer';
import { useTheme } from '../../context/ThemeContext';

export default function Layout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('cursor-glow');
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen dark:dark relative overflow-hidden">
      {/* Custom cursor glow effect */}
      <div id="cursor-glow" className="fixed w-[150px] h-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[#00A3FF] dark:opacity-50 dark:bg-[#00A3FF] blur-[100px] z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-400 rounded-full animate-pulse-scale"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400/60 dark:bg-purple-400 rounded-full animate-pulse-scale delay-300"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-400 rounded-full animate-pulse-scale delay-700"></div>
        
        {/* Animated gradient lines */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/4 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent dark:via-blue-500/10 animate-slide-right-slow"></div>
          <div className="absolute right-0 top-2/4 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent dark:via-purple-500/10 animate-slide-left-slow delay-300"></div>
          <div className="absolute left-0 top-3/4 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent dark:via-cyan-500/10 animate-slide-right-slow delay-700"></div>
        </div>
      </div>

      <Header
        title="Logo"
        subtitle="Stronger Together"
        isDarkMode={isDarkMode}
        onDarkModeChange={toggleTheme}
        logoUrl={isDarkMode ? "/logowhite.png" : "/logo.png"}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}