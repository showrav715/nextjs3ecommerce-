
"use client";
import { useEffect } from 'react';

import './globals.css';

import Header from '@/components/frontend/Header';

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body>
        <div className='body-wrapper'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
