import type { Metadata } from 'next';
import Banner from '@/components/Banner';
import OpenAccount from '@/components/OpenAccount';
import List from '@/components/List';
import Account from '@/components/Account';

export const metadata: Metadata = {
  title: 'หน้าแรก'
};

export default function HomePage() {
  console.log('Cloudinary Name:', process.env.CLOUDINARY_NAME);
  console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY);
  console.log('Cloudinary API Secret:', process.env.CLOUDINARY_API_SECRET);
  return (
    <div className='space-y-12'>
      <Banner />
      <OpenAccount />
      <List />
      <Account />
    </div>
  );
};