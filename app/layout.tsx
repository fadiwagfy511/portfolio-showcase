import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Fadi Alwagfy — Software Portfolio',
    description: 'Full-stack developer portfolio showcasing SaaS, AI, EdTech, and Industrial Automation projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
                <NavBar />
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
