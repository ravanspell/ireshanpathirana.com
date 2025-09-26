import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReactGA from "react-ga4"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/style.css';
import { useEffect } from 'react'

// font awesome initial styles disable (Specific to next.js)
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ireshan Pathirana | Software Engineer',
  description: 'Software Engineer specializing in React.js, Node.js, Java Spring Boot and scalable web applications.',
  keywords: ['Software Engineer', 'React Developer', 'Frontend Engineer'],
  openGraph: {
    title: 'Ireshan Pathirana | Software Engineer',
    description: 'Software Engineer specializing in React.js, Node.js, Java Spring Boot and scalable web applications.',
    locale: 'en_US',
    type: 'website',
    url: 'https://ireshanpathirana.com'
  },
  alternates: {
    // avoids duplicate indexing issues
    canonical: 'https://ireshanpathirana.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    ReactGA.initialize("G-X5X2WWLDX9");
  }, []);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container max-w-screen-xl'>
          {children}
        </div>
      </body>
    </html>
  )
}
