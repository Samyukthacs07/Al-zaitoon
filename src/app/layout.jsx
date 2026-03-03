import { Inter, Tenor_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingScreen from '../components/ui/LoadingScreen';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
});

const tenorSans = Tenor_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-display',
});

export const metadata = {
    title: 'Al-Zaitoon | Luxury Beauty Distribution',
    description: 'The gold standard in luxury beauty distribution across the MENA region.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className={`${inter.variable} ${tenorSans.variable} font-body text-[var(--color-app-text)] bg-[var(--color-app-bg)] min-h-screen flex flex-col antialiased`}>
                <LoadingScreen />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
