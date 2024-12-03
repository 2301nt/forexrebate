import Ads from '@/components/Ads';
import { getAds } from '@/hooks/useAds';
import { Frown } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ข่าวสารอัพเดท',
};

export default async function NewAdsPage() {
  const ads = await getAds();

  if (ads.length === 0) {
    return (
      <div className='flex items-center justify-center h-60 bg-slate-900'>
        <div className='flex flex-col items-center gap-3'>
          <Frown size={100} className='text-yellow-500' />
          <p className='text-3xl text-white'>ไม่พบข่าวสารใหม่</p>
        </div>
      </div>
    );
  };

  return (
    <div className='px-2 py-4 flex flex-col justify-center  gap-y-6 '>
      <div className='text-2xl font-bold pb-2'>
        <h1 className='text-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-transparent bg-clip-text'>ข่าวสารย้อนหลัง 7 วัน</h1>
      </div>
      {ads.map((ad, index) => (
        <Ads key={index} ad={ad} />
      ))}
    </div>
  );
};

