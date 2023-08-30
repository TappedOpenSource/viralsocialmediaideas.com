'use client';

import { useEffect, useState } from 'react';
import { randomChoice } from '@/utils/random';

const RandomIdea = ({ ideas }: {
    ideas: string[]
}) => {
  const [idea, setIdea] = useState('');
  const newPostIdea = async () => {
    const idea = randomChoice(ideas);
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

    document.addEventListener('keyup', handleKeyboardEvent);
    // clean up
    return () => {
      document.removeEventListener('keyup', handleKeyboardEvent);
    };
  }, []);

  return (
    <>
      <div className="text-center lg:max-w-5xl lg:w-full pb-12">

        <div className="text-5xl font-extrabold m-2 text-white">
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
    </>
  );
};

export default RandomIdea;
