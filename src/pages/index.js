
import React from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card/Card';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout/Layout';
import { Map2d } from '../components/Map2d'; 
import { MapListCard } from '../components/MapListCard';
import Image from 'next/image';

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <Layout> 
      <Hero
        slides={[{
          backgroundColor: isDarkMode ? "#1e2433" : "#e6f0fb",
          fullScreen: true,
          component: (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"> 
                <div className="flex flex-col justify-center items-center md:items-start w-full">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left w-full">
                    SynTech In-Brief
                  </h1>
                  <div className="flex justify-center md:justify-start w-full">
                    <Image
                      src={isDarkMode ? "/logowhite.png" : "/logo.png"}
                      alt="SynTech Logo"
                      width={192}
                      height={192}
                      priority
                      quality={90}
                      loading="eager"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
                      className="object-contain transition-opacity duration-300 ml-0 md:ml-12"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', textRendering: 'optimizeLegibility' }}>
                  About SynTech System Technologies Inc. 
                  </h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  At SynTech, we build on a strong foundation of deep technical expertise in defense systems, program and project management, and large-scale defense project execution.  
                  </p>
                  <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Solution Services -  Products & Systems
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Business Upgrade </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Tenders & Contract Services.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }]}
        showGlassmorphism={true}
        position="center"
        contentPosition="center"
      />
      <div  >

      </div>

      <section className="relative z-10 bg-white dark:bg-gray-900 py-24 px-6 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">

          <div className="space-y-8">
            <Card
              thumbnail={
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
                 Solution Services: Products & Systems 
                </h2>
              }
              header="We help companies identify and implement the right configuration units and components to optimize performance, reliability, and mission success. Our expertise ensures seamless integration of cutting-edge technologies tailored to specific defense needs."
              media="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              buttons={[
                {
                  label: "Explore",
                  onClick: () => console.log("Solutions clicked"),
                },
              ]}
              animationDirection="left"
              className="flex flex-col md:flex-row md:items-center overflow-hidden"
            />
            <Card
              thumbnail={
                <>
                  <h2 className="text-4xl font-semibold text-gray-900 dark:text-white  text-center">
                    Business Upgrade
                  </h2>
                  <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
                    for Defence Industry
                  </h2>
                </>
              }
              header="We offer end-to-end business transformation services tailored to the defense sector. Our structured approach, built on extensive program management experience and deep technical expertise, ensures strategic value and sustainable growth:"
              supportingText=""
              media="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000"
              buttons={[
                {
                  label: "Explore",
                  onClick: () => console.log("Security clicked"),
                },
              ]}
              animationDirection="right"
              className="flex flex-col md:flex-row md:items-center overflow-hidden"
            />
            <Card
              thumbnail={
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
                  Tenders & Contract Services 
                </h2>
              }
              header="We provide comprehensive support throughout the entire tender and contract lifecycle, ensuring successful bid submissions, compliance, and strategic execution. We connect our clients with the right national and international tenders and contracts, ensuring strategic alignment, compliance, and competitive advantage in the defense sector."
              media="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
              buttons={[
                {
                  label: "Explore",
                  onClick: () => console.log("Cloud clicked"),
                },
              ]}
              animationDirection="left"
              className="flex flex-col md:flex-row md:items-center overflow-hidden"
            />
          </div>
        </div>
      </section> 
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
    </Layout>
  );
}