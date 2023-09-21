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
    <main className="flex min-h-[100dvh] items-center p-24">
      <h1 className='name'>Guilherme Carvalho</h1>
    </main>
  )
}
