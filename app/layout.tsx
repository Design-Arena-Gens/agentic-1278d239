import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Call Coach HQ',
  description:
    'Actionable sales call coaching insights for reps and revenue leaders.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
