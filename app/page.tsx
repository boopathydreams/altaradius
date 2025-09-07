import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
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
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
        </div>

        <div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-56'>
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
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Revolutionizing business operations for transport, construction,
              mining, and industrial sectors. Comprehensive ERP platform with
              advanced inventory management, supply chain optimization, and
              fraud prevention.
            </p>

            {/* Features List */}
            <div className='mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircleIcon className='h-5 w-5 text-green-400' />
                <span>Inventory Management</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircleIcon className='h-5 w-5 text-green-400' />
                <span>Supply Chain Solutions</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircleIcon className='h-5 w-5 text-green-400' />
                <span>Fraud Prevention</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircleIcon className='h-5 w-5 text-green-400' />
                <span>Business Intelligence</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className='mt-10 flex flex-col items-center justify-center gap-6'>
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
                    <span className='text-blue-400'>admin@altaradius.com</span>
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
            <div className='mt-16 text-center'>
              <p className='text-sm text-gray-400 mb-4'>Expected Launch</p>
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
  );
}
