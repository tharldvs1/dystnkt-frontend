import '../styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={`${inter.className} bg-dystnkt-black`}>
        {children}
      </body>
    </html>
  );
}
