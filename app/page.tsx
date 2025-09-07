import Image from 'next/image';
import {
  CubeIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Altaradius',
    description:
      'Next-generation ERP solutions for transport, construction, mining, and industrial sectors',
    url: 'https://altaradius.com',
    logo: 'https://altaradius.com/logo_icon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'admin@altaradius.com',
      contactType: 'Business Inquiries',
    },
    foundingDate: '2025',
    industry: 'Enterprise Software',
    serviceArea: {
      '@type': 'Place',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ERP Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Inventory Management',
            description: 'Real-time tracking & control',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Supply Chain Solutions',
            description: 'End-to-end optimization',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Fraud Prevention',
            description: 'Advanced security measures',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SoftwareApplication',
            name: 'Business Intelligence',
            description: 'Data-driven insights',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
        {/* Header */}
        <header className='relative z-10'>
          <nav
            className='flex items-center justify-between p-6 lg:px-8'
            aria-label='Global'
          >
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5 flex items-center space-x-3'>
                <Image
                  src='/logo_icon.svg'
                  alt='Altaradius'
                  width={40}
                  height={40}
                  className='h-10 w-auto'
                />
                <Image
                  src='/logo_text.svg'
                  alt='Altaradius'
                  width={120}
                  height={40}
                  className='h-8 w-auto'
                />
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <div className='relative isolate px-6 lg:px-8'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
          </div>

          <div className='mx-auto max-w-4xl py-8 sm:py-12 lg:py-16'>
            <div className='text-center'>
              {/* Coming Soon Badge */}
              <div className='inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8'>
                <span>🚀 Coming Soon</span>
              </div>

              {/* Main Heading */}
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Next-Generation
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                  {' '}
                  ERP Solution
                </span>
              </h1>

              {/* Subtitle */}
              <p className='mt-4 text-lg leading-8 text-gray-300'>
                Revolutionizing business operations for transport, construction,
                mining, and industrial sectors. Comprehensive ERP platform with
                advanced inventory management, supply chain optimization, and
                fraud prevention.
              </p>

              {/* Features Cards */}
              <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto'>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors'>
                  <div className='flex justify-center mb-3'>
                    <CubeIcon className='h-8 w-8 text-blue-400' />
                  </div>
                  <h3 className='font-semibold text-white text-sm mb-1'>
                    Inventory Management
                  </h3>
                  <p className='text-xs text-gray-400'>
                    Real-time tracking & control
                  </p>
                </div>

                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors'>
                  <div className='flex justify-center mb-3'>
                    <TruckIcon className='h-8 w-8 text-green-400' />
                  </div>
                  <h3 className='font-semibold text-white text-sm mb-1'>
                    Supply Chain Solutions
                  </h3>
                  <p className='text-xs text-gray-400'>
                    End-to-end optimization
                  </p>
                </div>

                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors'>
                  <div className='flex justify-center mb-3'>
                    <ShieldCheckIcon className='h-8 w-8 text-red-400' />
                  </div>
                  <h3 className='font-semibold text-white text-sm mb-1'>
                    Fraud Prevention
                  </h3>
                  <p className='text-xs text-gray-400'>
                    Advanced security measures
                  </p>
                </div>

                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors'>
                  <div className='flex justify-center mb-3'>
                    <ChartBarIcon className='h-8 w-8 text-purple-400' />
                  </div>
                  <h3 className='font-semibold text-white text-sm mb-1'>
                    Business Intelligence
                  </h3>
                  <p className='text-xs text-gray-400'>Data-driven insights</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className='mt-8 flex flex-col items-center justify-center gap-4'>
                <div className='text-center'>
                  <p className='text-lg text-gray-300 mb-2'>
                    Interested in learning more?
                  </p>
                  <p className='text-sm text-gray-400'>
                    Contact us for enterprise solutions and partnership
                    opportunities
                  </p>
                </div>

                {/* Contact Button */}
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                  <a
                    href='mailto:admin@altaradius.com?subject=Altaradius ERP Inquiry'
                    className='inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors'
                  >
                    Contact Us
                  </a>
                  <div className='text-center'>
                    <p className='text-sm text-gray-400'>
                      Email:{' '}
                      <span className='text-blue-400'>
                        admin@altaradius.com
                      </span>
                    </p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300'>
                  <div className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
                    <span>Enterprise Solutions Available</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                    <span>Partnership Opportunities</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-cyan-400 rounded-full'></span>
                    <span>Custom Development</span>
                  </div>
                </div>
              </div>

              {/* Launch Timeline */}
              <div className='mt-8 text-center'>
                <p className='text-sm text-gray-400 mb-2'>Expected Launch</p>
                <p className='text-2xl font-bold text-white'>Q4 2025</p>
              </div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
          </div>
        </div>

        {/* Footer */}
        <footer className='relative z-10 border-t border-gray-800'>
          <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
            <div className='flex justify-center space-x-6 md:order-2'>
              <p className='text-sm text-gray-400'>Stay tuned for updates</p>
            </div>
            <div className='mt-8 md:order-1 md:mt-0'>
              <p className='text-center text-xs leading-5 text-gray-400'>
                &copy; 2025 Altaradius. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
