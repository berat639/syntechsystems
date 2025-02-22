import React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const Custom404 = () => {
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <Head>
        <title>404: Page Not Found | SynTech</title>
        <meta name="description" content="The page you're looking for cannot be found. Please check the URL or navigate back to our homepage." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Page Not Found
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Return Home
          </Link>

          <div className="mt-8">
            <Image
              src={isDarkMode ? "/logowhite.png" : "/logo.png"}
              alt="SynTech Logo"
              width={64}
              height={64}
              priority
              className="h-16 mx-auto opacity-50"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;