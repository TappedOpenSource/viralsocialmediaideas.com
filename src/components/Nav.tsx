'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='fixed flex items-center flex-wrap bg-transparent p-3 '>
        <Link
          href="https://tapped.ai"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center p-2 mr-4 '
        >
          <Image
            src='/images/icon_1024.png'
            width={75}
            height={75}
            alt='tapped logo'
          />
        </Link>
        <button
          className='inline-flex p-3 hover:bg-white hover:text-black rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M5 12h14M5 7h14"/></svg>
        </button>
        {/* Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link
              href='https://tapped.ai'
              target="_blank"
              rel="noopener noreferrer"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black '
            >
                home
            </Link>
            <Link
              href='https://tappedapp.notion.site/Technical-Roadmap-4edc036572bd4d89913f5cd5a4cde0f6?pvs=4'
              target="_blank"
              rel="noopener noreferrer"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black'
            >
                roadmap
            </Link>
            <Link
              href='https://blog.tapped.ai'
              target="_blank"
              rel="noopener noreferrer"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black'
            >
                blog
            </Link>
            <Link
              href='https://getmusicnewsletters.com'
              target="_blank"
              rel="noopener noreferrer"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black'
            >
                newsletter
            </Link>
            <Link
              href='mailto://support@tapped.ai'
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black'
            >
                contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
