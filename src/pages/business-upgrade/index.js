import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';

const BusinessUpgradePage = () => {
  return (
    <Layout>
      <Head>
        <title>Business Upgrade | SynTech</title>
        <meta name="description" content="Learn about our business upgrade services and solutions for the defense industry." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Business Upgrade for Defense Industry</h1>
          <div className="prose dark:prose-invert max-w-none">
            {/* Business upgrade content will be added here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessUpgradePage;