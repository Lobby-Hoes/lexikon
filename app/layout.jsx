import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header/header';
import EasterEggComment from './easterEggComment';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Hobbylos Lexikon',
    description: 'Insider, Erklärungen und co. von dem erhabenden Podcast',
};

export default function RootLayout({ children }) {
    return (
        <html lang='de' className={inter.className}>
            <EasterEggComment/>
            <body>
                <main>
                    <header>
                        <Header/>
                    </header>
                    {children}
                </main>
            </body>
        </html>
    );
}
