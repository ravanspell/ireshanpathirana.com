import type { Metadata } from 'next';
import { Inter, Manrope, Source_Code_Pro } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/style.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ireshan Pathirana | Software Engineer',
  description:
    'Software Engineer specializing in React.js, Node.js, Java Spring Boot and scalable web applications.',
  keywords: ['Software Engineer', 'React Developer', 'Frontend Engineer'],
  openGraph: {
    title: 'Ireshan Pathirana | Software Engineer',
    description:
      'Software Engineer specializing in React.js, Node.js, Java Spring Boot and scalable web applications.',
    locale: 'en_US',
    type: 'website',
    url: 'https://ireshanpathirana.com',
  },
  alternates: {
    // avoids duplicate indexing issues
    canonical: 'https://ireshanpathirana.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${manrope.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
