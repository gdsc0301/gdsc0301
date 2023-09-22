'use client'

import './page.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/portfolio'), 6000);
  }, []);

  return (
    <main>
      <h1 className='name'>Guilherme Carvalho</h1>
      <h2 className='font-light text-2xl md:text-4xl'>Full-stack Developer</h2>
    </main>
  )
}
