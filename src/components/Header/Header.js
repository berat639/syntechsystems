import React, { memo, useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { DropdownMenu } from './DropdownMenu';
import { slide as BurgerMenu } from 'react-burger-menu';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';  // Yeni import ekleyin

export const Header = memo(({ 
  title = 'Dashboard',
  subtitle,
  logoUrl,
  showNotifications = true,
  showSearch = true,
  showSettings = true,
  className = '',
  isDarkMode = false,
  onDarkModeChange,
  onNotificationClick,
  onSearchChange,
  onSettingsClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const burgerStyles = {
    bmBurgerButton: {
      display: 'none'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      marginRight: '16px'
    },
    bmCross: {
      background: isDarkMode ? '#fff' : '#000'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100vh',
      top: 0, 
    },
    bmMenu: {
      background: isDarkMode 
        ? 'rgba(17, 24, 39, 0.7)' 
        : 'rgba(255, 255, 255, 0.7)',
      padding: '2.5em 1.5em',
      fontSize: '1.15em',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: isDarkMode 
        ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
        : '0 4px 30px rgba(0, 0, 0, 0.05)',
      borderLeft: isDarkMode 
        ? '1px solid rgba(255, 255, 255, 0.1)' 
        : '1px solid rgba(255, 255, 255, 0.3)',
      transition: 'background-color 0.2s ease'
    },
    bmItemList: {
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    bmItem: {
      display: 'inline-block',
      color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
      textDecoration: 'none',
      transition: 'color 0.2s ease'
    },
    bmOverlay: {
      display: 'none'
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href) => async (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    await router.push(href);
  };
  

  return (
    <>
      <Head>
        <title>{title} | SynTech</title>
        <meta name="description" content="SynTech - Solution Services, Business Upgrade for Defense Industry, and Tenders & Contracts" />
        <meta property="og:title" content={`${title} | SynTech`} />
        <meta property="og:description" content="SynTech - Solution Services, Business Upgrade for Defense Industry, and Tenders & Contracts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header 
        className={`
          fixed w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 
          shadow-sm px-6 py-4 transition-colors duration-200 ${className}
        `}
        role="banner"
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
            {logoUrl && (
            <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity" aria-label="Go to homepage" title="Home">
              <Image 
                src={logoUrl} 
                alt={`${title} logo`}
                width={64}
                height={64}
                className="object-contain"
                priority
              />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">SynTech</h1>
            </a>
          )}
        </div>

        <div className="flex items-center space-x-6"> 
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu
              label="About Us"
              items={[
                [
                  { label: 'About Us', href: '/about' },
                  { label: 'The Team', href: '/team' },
                  { label: 'Portfolio Companies', href: '/portfolio' },
                  { label: 'Global Outreach', href: '/global-outreach' },
                ]
              ]}
            />
            <DropdownMenu
              label="What We Do"
              items={[
                [
                  { label: 'Solution Services - Products & Systems', href: '/solutions' },
                  { label: 'Business Upgrade for Defense Industry', href: '/business-upgrade' },
                  { label: 'Tenders & Contracts', href: '/tenders' },
                  { label: 'Success Stories', href: '/success-stories' },
                ]
              ]}
            />
            <Link href="/news" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={handleNavigation('/news')}>
              News
            </Link> 
            <Link href="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" onClick={handleNavigation('/contact')}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onDarkModeChange?.(!isDarkMode)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              className="md:hidden p-2 text-gray-900 dark:text-white"
              onClick={handleMenuToggle}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <BurgerMenu 
        right 
        styles={burgerStyles} 
        className="md:hidden" 
        isOpen={isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
      >
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <Link href="/about" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/about')}>About Us</Link>
            <Link href="/team" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/team')}>The Team</Link>
            <Link href="/portfolio" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/portfolio')}>Portfolio Companies</Link>
            <Link href="/global-outreach" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/global-outreach')}>Global Outreach</Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">What We Do</h3>
            <Link href="/solutions" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/solutions')}>Solution Services - Products & Systems</Link>
            <Link href="/business-upgrade" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/business-upgrade')}>Business Upgrade for Defense Industry</Link>
            <Link href="/tenders" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/tenders')}>Tenders & Contracts</Link>
            <Link href="/success-stories" className="block w-full text-left hover:text-blue-500" onClick={handleNavigation('/success-stories')}>Success Stories</Link>
          </div>

          <Link href="/news" className="text-lg hover:text-blue-500" onClick={handleNavigation('/news')}>News</Link>
          <Link href="/contact" className="text-lg hover:text-blue-500" onClick={handleNavigation('/contact')}>Contact</Link>
        </div>
      </BurgerMenu>
    </header>
    </>
  );
});

Header.displayName = 'Header';