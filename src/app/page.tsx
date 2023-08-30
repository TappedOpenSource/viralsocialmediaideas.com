'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getRandomPostIdea } from '@/utils/random';

export default function Home() {
  const [idea, setIdea] = useState('')

  const newPostIdea = () => {
    const { idea } = getRandomPostIdea();
    setIdea(idea);
  };

  useEffect(() => {
    newPostIdea();
  }, []);

  useEffect(() => {
    const handleKeyboardEvent = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        newPostIdea();
      }
    };
    
    document.addEventListener("keyup", handleKeyboardEvent);
    // clean up
    return () => {
      document.removeEventListener("keyup", (event) => {
      });
    };
  }, []);


  return (
    <main className="flex min-h-screen bg-[#38B6FF] flex-col items-center justify-center p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="md:hidden fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
              className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://app.tapped.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/images/tapped_logo.png"
                alt="Tapped AI Logo"
                width={48}
                height={14}
                priority
              />
            </a>
            <a
              className="md:hidden underline flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://app.tapped.ai/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the app
            </a>
        </div>
      </div>

      <div className="hidden md:block py-12">
        <Image 
          src="/images/icon_1024.png"
          alt="Tapped AI Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="text-center lg:max-w-5xl lg:w-full">

        <div className="text-5xl font-extrabold p-2 text-white">
          {idea}
        </div>
        <div className="p-6"></div>
        <button 
        className="bg-black p-4 rounded-full text-white font-bold text-lg"
        onClick={newPostIdea}>
          show me the next idea!
        </button>
        <div className="p-2"></div>
        <div className="hidden md:block">
          or press space
        </div>

      </div>
    </main>
  )
}
