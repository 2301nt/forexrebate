import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Providers } from '@/components/providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className='bg-gradient-to-b from-[#0A1128] via-[#001F3F] to-[#102A43] text-[#C5DFFF] min-h-svh'>
        <Navbar />
        <main className='container mx-auto px-4 pb-8 sm:px-6 lg:px-8 mt-20'>
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
};