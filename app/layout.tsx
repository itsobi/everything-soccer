import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Everything Soccer!',
  description: 'Up to date standings, news, and more!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100/50">
          <Header />
          <div className="max-w-6xl mx-auto mt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
