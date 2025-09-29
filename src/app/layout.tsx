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
        {/* 🔥 Load Tailwind via CDN — instant styles */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#000000',
                    accent: '#00f3ff',
                    highlight: '#ff2a6d'
                  }
                }
              }
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}