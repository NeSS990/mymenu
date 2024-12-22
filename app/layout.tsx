import '@/app/globals.css'; // Подключаем глобальные стили
import Navbar from '@/components/Navbar/Navbar';
import Script from 'next/script';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Restaurant',
  description: 'Restaurant Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Подключаем Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Philosopher:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Подключаем локальный файл fonts.css */}
        <link rel="stylesheet" href="/styles/fonts.css" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <div className="layout flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>

          <main className="flex-1">
            {children}
          </main>
          
          <Footer />

          <Script
            src="https://api-maps.yandex.ru/v3/?apikey=YOUR_API_KEY&lang=ru_RU"
            strategy="beforeInteractive"
          />
        </div>
      </body>
    </html>
  );
}