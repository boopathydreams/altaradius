import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Altaradius - Next-Generation ERP Solutions | Coming Soon',
  description:
    'Revolutionizing business operations for transport, construction, mining, and industrial sectors. Comprehensive ERP platform with advanced inventory management, supply chain optimization, and fraud prevention. Expected launch Q4 2025.',
  keywords: [
    'ERP software',
    'Enterprise Resource Planning',
    'Business Management',
    'Inventory Management',
    'Supply Chain Solutions',
    'Fraud Prevention',
    'Business Intelligence',
    'Transport ERP',
    'Construction ERP',
    'Mining ERP',
    'Industrial ERP',
    'Altaradius',
  ],
  authors: [{ name: 'Altaradius' }],
  creator: 'Altaradius',
  publisher: 'Altaradius',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://altaradius.com',
    title: 'Altaradius - Next-Generation ERP Solutions',
    description:
      'Revolutionizing business operations for transport, construction, mining, and industrial sectors. Comprehensive ERP platform coming Q4 2025.',
    siteName: 'Altaradius',
    images: [
      {
        url: '/logo_icon.svg',
        width: 1200,
        height: 630,
        alt: 'Altaradius ERP Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altaradius - Next-Generation ERP Solutions',
    description:
      'Revolutionizing business operations for transport, construction, mining, and industrial sectors. Coming Q4 2025.',
    images: ['/logo_icon.svg'],
    creator: '@altaradius',
  },
  alternates: {
    canonical: 'https://altaradius.com',
  },
  category: 'Business Software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' prefix='og: https://ogp.me/ns#'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#1e293b' />
        <meta name='msapplication-TileColor' content='#1e293b' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo_icon.svg' />
        <meta name='application-name' content='Altaradius' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Altaradius' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
