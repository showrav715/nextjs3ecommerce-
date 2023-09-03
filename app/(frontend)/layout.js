
"use client";

import './globals.css';

import Header from '@/components/frontend/Header';
import Footer from '@/components/frontend/Footer';

export default function RootLayout({ children }) {

  return (
    <html lang="en">

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
