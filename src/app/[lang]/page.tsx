import { Rubik } from 'next/font/google';
import { Locale } from '@/i18n-config';
import Link from 'next/link';
import Nav from '@/components/Nav';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function Home({ params }: {
  params: { lang: Locale },
}) {
  return (
    <div className={`min-h-screen ${rubik.className}`}>
      <Nav />
      <main className="flex bg-[#38B6FF] flex-col items-center justify-center p-12">
        <h1 className='text-4xl md:text-7xl font-extrabold text-center md:w-2/3 py-8'>
          generate social media ideas in less than a second
        </h1>
        <Link
          className='font-bold text-lg text-center px-8 py-2 rounded-full bg-black'
          href="/[lang]/idea"
          as={`/${params.lang}/idea`}>
          begin
        </Link>
      </main>
    </div>
  );
}
