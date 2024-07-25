import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Everything Soccer!',
  description: 'Up to date scores, stats, and more!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-6xl mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
