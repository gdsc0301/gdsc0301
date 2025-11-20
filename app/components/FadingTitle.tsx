'use client'
import { useEffect, useState } from 'react';
import './style/FadingTitle.scss';

export default function FadingTitle() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setHidden(true), 6000);
  }, []);

  return (
    <div
      data-hide={hidden}
      className='
        fading-title
        fixed
        top-0
        left-0
        w-full
        h-full
        z-50
        bg-black
        data-[hidden=true]:opacity-0
        data-[hidden=true]:pointer-events-none
        flex
        flex-col
        items-center
        justify-center
        gap-4
        transition-opacity
        duration-1000
        text-white
      '
    >
      <h1 className='name'>Guilherme Carvalho</h1>
      <h2 className='font-light text-2xl md:text-4xl'>
        Full-Stack Developer
      </h2>
    </div>
  )
}
