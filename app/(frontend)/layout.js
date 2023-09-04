
"use client";

import './globals.css';

import Header from '@/components/frontend/Header';
import Footer from '@/components/frontend/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href='../../assets/images/favicon.png' />
      </Head>
      <body>
        <div className='body-wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
