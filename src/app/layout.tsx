import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/style.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="container max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
