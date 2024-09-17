import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Referral from '@/components/Refferal';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body >
        <Navbar />
        {children}
        <Referral />
        <Footer />
      </body>
    </html>
  );
}