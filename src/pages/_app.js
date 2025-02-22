import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../index.css';

// Dynamically import non-critical components
const loadNonCriticalScripts = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined') {
      // Add any non-critical script loading here
      resolve();
    }
  });
};

const ThemeProvider = dynamic(
  () => import('../context/ThemeContext').then((ctx) => ctx.ThemeProvider),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;