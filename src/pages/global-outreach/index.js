import React from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import { MapListCard } from '../../components/MapListCard';
import { Map2d } from '../../components/Map2d'; 
import { Card } from '../../components/Card';
const GlobalOutreachPage = () => {
  return (
    <Layout>
      <Head>
        <title>Global Outreach | SynTech</title>
        <meta name="description" content="Discover SynTech's global presence and international partnerships in the defense industry." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Global Outreach</h1>
          <div className="prose dark:prose-invert max-w-none">
          <section className="relative z-10 bg-white dark:bg-gray-900 py-12 px-6 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <Card
                thumbnail={<h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Global Network</h2>}
                header="Our Global Presence"
                className="flex flex-col h-full"
              >
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Global Outreach and Partnerships </h3>
                  <p className='text-xl text-gray-700 dark:text-gray-300 mb-8'>We deliver world-class solutions worldwide, leveraging our contact offices, global experts, and strategic partners.
                  </p>
                  <MapListCard/>
                </div>
              </Card>
            </div>
              <div className="md:col-span-8  ">  
              <Map2d  /> 
              </div>  
          </div>
        </div>
      </section> 
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GlobalOutreachPage;