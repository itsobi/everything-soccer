import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { APIProvider } from '@vis.gl/react-google-maps';
import GoogleMapsApiProvider from '@/components/GoogleMapsApiProvider';

export const metadata: Metadata = {
  title: 'Everything Soccer',
  description:
    'Up to date standings, news, and more from the top soccer leagues in the world!',
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
          <GoogleMapsApiProvider>
            <Header />
            <div className="max-w-6xl mx-auto">{children}</div>
            <footer className="text-xs p-4 text-gray-400">
              <p>
                brought to you by:{' '}
                <a
                  href="https://justobii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  justobii.com
                </a>
              </p>
            </footer>
          </GoogleMapsApiProvider>
        </div>
      </body>
    </html>
  );
}
