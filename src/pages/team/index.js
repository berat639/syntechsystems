import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

const TeamPage = () => {
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

  const teamMembers = [
    {
      name: 'Alper Erdener',
      title: 'CEO',
      email: 'alper.erdener@syntechsystem.com',
      image: '/team/alper-erdener.webp',
      bio: [
        'Our founder Alper Erdener is a former Program Director at ASELSAN Inc., Türkiye\'s largest defense company and one of the world\'s top 50 defense firms. He has a proven track record of successfully managing complex, large-scale defense programs.',
        'With over 25 years of national and international experience in the defense industry, he specializes in product development, program management, and business development.',
        'He played a pivotal role in directing Türkiye\'s first state-of-the-art Fire Control System development and unmanned vehicle projects, successfully leading multidisciplinary teams. With hands-on expertise in both technical development and program execution, he ensures clients receive practical, implementation-focused solutions.',
        'Alper Erdener is also the CEO of RAS Technology Inc., a portfolio company of SynTech.'
      ]
    },
    {
      name: 'Oğuz Arabalı',
      title: 'Director, Business Development',
      email: 'oguz.arabali@syntechsystem.com',
      image: '/team/oguz-arabali.webp',
      bio: [
        'After serving as an artillery and intelligence officer in Turkish Armed Forces for 27 years, he retired at the rank of full colonel on September 2018.',
        'He\'s experienced about NATO Intelligence Surveillance Reconnaissance (ISR) capability, organization and training issues, Counter Intelligence (CI)&Human Intelligence (HUMINT)&Protective Security, Unmanned Aircraft Systems (UAS), Strategic Intelligence, Intelligence training during his military career.',
        'He attended at peacekeeping operations, meetings (especially NATO Land Capability Group-6), seminars, conferences, exercises, courses and visits in Afghanistan, Bosnia-Herzegovina, USA, Belgium, Germany, England and Bulgaria about 2.5 years.',
        'After his retirement, he continues his professional life managing and coordinating defense and public security projects.'
      ]
    },
    {
      name: 'Taner Gürlek',
      title: 'Director, Business Upgrade Programs',
      email: 'taner.gurlek@syntechsystem.com',
      image: '/team/taner-gurlek.webp',
      bio: [
        'After serving as an artillery and intelligence officer in Turkish Armed Forces for 27 years, he retired at the rank of full colonel on September 2018.',
        'He\'s experienced about NATO Intelligence Surveillance Reconnaissance (ISR) capability, organization and training issues, Counter Intelligence (CI)&Human Intelligence (HUMINT)&Protective Security, Unmanned Aircraft Systems (UAS), Strategic Intelligence, Intelligence training during his military career.',
        'He attended at peacekeeping operations, meetings (especially NATO Land Capability Group-6), seminars, conferences, exercises, courses and visits in Afghanistan, Bosnia-Herzegovina, USA, Belgium, Germany, England and Bulgaria about 2.5 years.',
        'After his retirement, he continues his professional life managing and coordinating defense and public security projects.'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>SynTech Leadership Team - Alper Erdener CEO & Defense Industry Experts</title>
        <meta name="description" content="Meet SynTech's leadership team led by CEO Alper Erdener, former ASELSAN Program Director. Our experts bring 25+ years of defense industry experience in Turkey and globally." />
        <meta name="keywords" content="Alper Erdener, SynTech CEO, ASELSAN, Turkish Defense Industry, Defense Technology, Fire Control Systems, Unmanned Vehicle Projects" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="SynTech Leadership Team - Defense Industry Experts" />
        <meta property="og:description" content="Meet SynTech's leadership team led by CEO Alper Erdener, former ASELSAN Program Director. Experts in defense technology and innovation." />
        <meta property="og:image" content="/team/alper-erdener.webp" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SynTech Leadership Team - Defense Industry Experts" />
        <meta name="twitter:description" content="Meet SynTech's leadership team led by CEO Alper Erdener, former ASELSAN Program Director. Experts in defense technology and innovation." />
        <meta name="twitter:image" content="/team/alper-erdener.webp" />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SynTech Systems" />
      </Head>
      
      {/* Schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SynTech Systems",
            "url": "https://syntechsystem.com",
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.title,
              "email": member.email,
              "image": member.image
            }))
          })
        }}
      />

      {/* Custom cursor glow effect */}
      <div id="cursor-glow" className="fixed w-[150px] h-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[#00A3FF] dark:opacity-50 dark:bg-[#00A3FF] blur-[100px] z-0"></div>

      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#0B1221] dark:via-[#0B1221] dark:to-[#0B1221] pt-24 relative overflow-hidden transition-colors duration-300">
        {/* Enhanced Light Mode Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-l from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-pink-200/30 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-float"></div>
          
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 dark:bg-blue-400 rounded-full animate-pulse-scale"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/60 dark:bg-purple-400 rounded-full animate-pulse-scale delay-300"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-cyan-400/60 dark:bg-cyan-400 rounded-full animate-pulse-scale delay-700"></div>
          
          {/* Enhanced grid pattern */}
          <div className="grid grid-cols-12 gap-4 absolute inset-0">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="h-20 border-[0.5px] border-blue-100/30 dark:border-gray-500/20 group-hover:border-blue-200/50 transition-colors duration-500"></div>
            ))}
          </div>

          {/* Animated gradient lines */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-1/4 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent dark:via-blue-500/10 animate-slide-right-slow"></div>
            <div className="absolute right-0 top-2/4 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent dark:via-purple-500/10 animate-slide-left-slow delay-300"></div>
            <div className="absolute left-0 top-3/4 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent dark:via-cyan-500/10 animate-slide-right-slow delay-700"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="flex flex-col items-center mb-16 relative"> 
            <span className="text-sm font-semibold text-blue-600 dark:text-[#00A3FF] tracking-wider mb-2 animate-fade-in uppercase">Leadership Team</span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative group">
              Meet Our Defense Industry Experts
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -inset-x-6 -inset-y-4 bg-blue-500/5 dark:bg-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </h1>
            <p className="text-gray-600 dark:text-white/90 text-lg max-w-2xl text-center animate-fade-in delay-200">
              Meet the experts behind SynTech's success. Our leadership team brings decades of experience in defense and technology innovation.
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 gap-16 mt-12 relative">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-9 items-start group relative">
                {/* Hover card effect */}
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                
                <div className="w-full md:w-1/3">
                  <div className="relative transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="relative w-full max-w-[300px] mx-auto">
                      {/* Image glow effect */}
                      <div className="absolute -right-4 inset-y-0.5 left-0 bg-gradient-to-r from-[#00A3FF] to-white/0 dark:from-[#00A3FF] dark:to-[#0B1221] opacity-30 blur rounded-2xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-xl"></div>
                      
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.title} at SynTech Systems - Defense Industry Expert`}
                          width={400}
                          height={400}
                          priority={index === 0}
                          className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]/90 dark:to-[#0B1221] z-20 transition-opacity duration-300 group-hover:opacity-80"></div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 border border-blue-500/10 dark:border-blue-500/20 rounded-2xl z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="text-center -mt-16 relative z-30 p-4">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-white">{member.name}</h2>
                      <h3 className="text-gray-600 dark:text-white/80 mt-1 transition-colors duration-300">{member.title}</h3>
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-700 dark:text-white dark:hover:text-blue-200 mt-2 inline-block transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full group-hover:translate-y-1">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 transform transition-all duration-500 group-hover:translate-x-4">
                  <div className="space-y-6">
                    {member.bio.map((paragraph, pIndex) => (
                      <div key={pIndex} className="flex items-start group/para">
                        <div className="relative flex-shrink-0 mr-4 mt-1">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-lg blur-sm group-hover/para:blur-md transition-all duration-300"></div>
                          <div className="w-6 h-6 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center relative">
                            <svg 
                              className="w-4 h-4 text-blue-600/80 dark:text-white/80 transform group-hover/para:translate-x-0.5 transition-transform duration-300" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-white/80 leading-relaxed transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white flex-1 pt-0.5">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Motto with Team Photo */}
          <div className="text-center mt-24 relative group space-y-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A3FF]/5 dark:via-[#00A3FF]/10 to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
            <div className="relative">
              <p className="text-3xl font-semibold text-gray-900 dark:text-white italic relative">
                Our Leadership's Motto:
                {/* Team Photo Section */}
            <div className="relative max-w-4xl mx-auto group/photo">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 rounded-2xl blur-2xl opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/team/syntechteam.webp"
                  alt="SynTech Systems Leadership Team - Defense Industry Experts Working Together"
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/photo:scale-105"
                  quality={90}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0.5 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent dark:from-cyan-900/50 opacity-60 photo:opacity-80 "></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover/photo:translate-y-0 transition-transform duration-500 mt-2 text-blue-600 dark:text-white font-bold tracking-wide animate-pulse">
                  <p className="text-white text-lg font-medium text-center">
                    Our team of experts bringing innovation to defense technology
                  </p>
                </div>
              </div>
            </div>
                <span className="block mt-2 text-blue-600 dark:text-white font-bold tracking-wide animate-pulse">
                  Stronger Together
                </span>
              </p>
            </div>

            
          </div>
        </div>
      </div> 
    </Layout>
  );
};

export default TeamPage;