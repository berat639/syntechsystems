import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
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
    <Layout>
      <Head>
        <title>About SynTech - Defense Industry Expertise & Solutions</title>
        <meta name="description" content="SynTech delivers expert defense solutions in systems integration, business upgrades, and contract services. Learn about our technical expertise and industry experience." />
        <meta name="keywords" content="Defense Systems, Military Technology, Defense Industry Solutions, ASELSAN Experience, Turkish Defense Industry" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About SynTech - Defense Industry Solutions" />
        <meta property="og:description" content="Expert defense solutions provider with deep technical expertise and industry experience." />
        <meta property="og:type" content="website" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SynTech Systems" />
      </Head>

      {/* Custom cursor glow effect */}
      <div id="cursor-glow" className="fixed w-[150px] h-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[#00A3FF] dark:opacity-50 dark:bg-[#00A3FF] blur-[100px] z-0"></div>

      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#0B1221] dark:via-[#0B1221] dark:to-[#0B1221] pt-24 relative overflow-hidden transition-colors duration-300">
        {/* Hero Section with Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-l from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
          
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-400 rounded-full animate-pulse-scale"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/60 dark:bg-purple-400 rounded-full animate-pulse-scale delay-300"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-400 rounded-full animate-pulse-scale delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Hero Section */}
          <div className="flex flex-col items-center mb-16 relative">
            <span className="text-sm font-semibold text-blue-600 dark:text-[#00A3FF] tracking-wider mb-2 animate-fade-in uppercase">About Us</span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative group text-center">
              Defense Industry Excellence
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </h1>
            <p className="text-gray-600 dark:text-white/90 text-lg max-w-3xl text-center animate-fade-in delay-200 mb-8">
              At SynTech, we build on a strong foundation of deep technical expertise in defense systems, program and project management, and large-scale defense project execution.
            </p>
          </div>

          {/* Company Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-7 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src="/Chain_Drives_featured.webp"
                  alt="SynTech Defense Systems Excellence"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Solution Services - Products & Systems

              </h2>
              <p className="text-gray-600 dark:text-white/90 leading-relaxed">
              We specialize in advanced defense systems with particular focus on:
              </p>
              <div className="space-y-4">

                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90">Electro-mechanical drive chain solutions including actuators, controllers and sensors
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90"> Robotics and Autonomous Systems, Sub-Systems and Components
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90"> Guidance & Smart Ammuniton Systems, Sub-Systems and Components 
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90">Communication Systems and Situational Awareness
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90"> Intelligent Surveillance Technologies
                  Intelligent Surveillance Technologies
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-white/90">Systems Integration Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Upgrade Services Section */}
          <div className="relative mb-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Business Upgrade Services for Defense Industry
            </h2>
            <p className="text-gray-600 dark:text-white/90 text-lg max-w-3xl mx-auto text-center mb-12">
              We offer end-to-end business transformation services tailored to the defense sector. Our structured seven-step approach, built on extensive program management experience and deep technical expertise, ensures strategic value and sustainable growth:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative p-6 bg-white/5 dark:bg-gray-800/5 rounded-xl border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] col-span-1 md:col-span-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Seven-Step Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">1. Capability Analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">2. Opportunity Identification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">3. Business Transformation Planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">4. Product Portfolio Management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">5. Regulatory and Compliance Services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">6. Business Development Support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">7. Incentives and Partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative p-6 bg-white/5 dark:bg-gray-800/5 rounded-xl border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] col-span-1 md:col-span-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">Strategic growth and market expansion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">Enhanced operational efficiency</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">Improved compliance and risk management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span className="text-gray-600 dark:text-white/80">Access to new business opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        

          {/* Tenders & Contract Services Section */}
          <div className="relative mt-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tenders & Contract Services
            </h2>
            <p className="text-gray-600 dark:text-white/90 text-lg max-w-3xl mx-auto text-center mb-12">
              SynTech provides comprehensive support throughout the entire tender and contract lifecycle, ensuring successful bid submissions, compliance, and strategic execution. We connect our clients with the right national and international tenders and contracts, ensuring strategic alignment, compliance, and competitive advantage in the defense sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* BID Management Section */}
              <div className="group relative p-6 bg-white/5 dark:bg-gray-800/5 rounded-xl border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">BID Management & Preparation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Technical proposal development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Compliance verification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Cost analysis and pricing strategy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Risk assessment and mitigation planning</span>
                  </li>
                </ul>
              </div>

              {/* Contract Management Section */}
              <div className="group relative p-6 bg-white/5 dark:bg-gray-800/5 rounded-xl border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contract Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Contract negotiation support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Terms and conditions analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Technical requirements review</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Subcontractor management</span>
                  </li>
                </ul>
              </div>

              {/* Strategic Advisory Section */}
              <div className="group relative p-6 bg-white/5 dark:bg-gray-800/5 rounded-xl border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategic Advisory & Industry Collaborations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Market intelligence and opportunity identification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Partner selection and consortium building</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Offset obligation management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600 dark:text-white/80">Industry Collaborations with partner companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;