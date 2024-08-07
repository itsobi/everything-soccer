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
          <div className="max-w-6xl mx-auto">{children}</div>
          <footer className="text-sm pl-2 pb-2 pt-4 text-gray-500">
            <p>
              brought to you by:{' '}
              <a
                href="https://justobii.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e52534] hover:underline"
              >
                justobii.com
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
