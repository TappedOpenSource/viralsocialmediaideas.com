import Image from 'next/image'
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import RandomIdea from './components/RandomIdea';

export default async function Home({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang) // en

  return (
    <main className="flex min-h-screen bg-[#38B6FF] flex-col items-center justify-center p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="md:hidden fixed bottom-0 left-0 flex h-40 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
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
              className="md:hidden underline text-black flex place-items-center gap-2 p-8 lg:pointer-events-auto"
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
      <RandomIdea ideas={dict.postIdeas} />
    </main>
  )
}
