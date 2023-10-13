'use client';

import Image from 'next/image';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import RandomIdea from './components/RandomIdea';
import Nav from '@/components/Nav';

const Home = async ({ params }: { params: { lang: Locale }}) => {
  const dict = await getDictionary(params.lang); // en

  return (
    <div className='h-screen'>
      <Nav />
      <main className="flex bg-[#38B6FF] flex-col items-center justify-center p-12">
        <div className="hidden md:block py-12">
          <Image
            src="/images/icon_1024.png"
            alt="Tapped AI Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <RandomIdea ideas={dict.postIdeas} />
      </main>
    </div>
  );
};

export default Home;
