import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../../components/ThreeScene/ThreeScene'), {
  ssr: false
});

const PortfolioPage = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio Companies | SynTech</title>
        <meta name="description" content="Explore our portfolio of successful partnerships and innovative companies in the defense industry." />
      </Head>
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="relative">
          <ThreeScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[300px] md:mt-[400px] lg:mt-[500px]">
              <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-8 text-center glow">
                Portfolio Companies
              </h1>
              <div className="prose dark:prose-invert max-w-none text-white/80">
                {/* Portfolio companies content will be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;