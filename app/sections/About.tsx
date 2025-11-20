'use client'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import Icon from '../components/Icon';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

const pictures = [
  'https://s3.guibr.com/portfolio/5IHXSdG.jpg',
  'https://s3.guibr.com/portfolio/N1BxUK6.jpg',
  'https://s3.guibr.com/portfolio/mtbsVgX.jpg',
  'https://s3.guibr.com/portfolio/9kM7i9k.jpg',
  'https://s3.guibr.com/portfolio/QutMiGv.jpg'
];

const About = () => {
  return (
    <section
      className='
        p-4 md:p-16
        grid md:grid-cols-2 gap-12
        items-center
        border border-white/5
        rounded-3xl
        bg-slate-800/25
      '
      id='about'
    >
      <div className="z-10">
        <h2 className="text-left py-8 text-4xl">Hello <span className='inline-block animate-bounce'>✌🏼</span></h2>
        <div className="[&_p]:mb-4 mt-4 text-sm text-slate-300 [&_a]:text-white [&_a]:underline [&_a]:hover:text-sky-300 [&_a]:duration-300 text-shadow-black">
          <p>
            My name is <a href="https://github.com/gdsc0301" target="_blank" rel="noopener noreferrer">Guilherme Carvalho</a>,
            and this is my Portfolio 🚀
          </p>
          <p>
            I'm a <strong>Full Stack Developer</strong> with 7 years of experience, and a passion for <strong>Frontend</strong>
            , <strong><Icon type='solid' name='cube' className='mr-1' />3D graphics</strong> and <strong>
              <Icon type='solid' name='gamepad' className='mr-1' />Game Development</strong>.
          </p>
          <p>
            My primary skills are <strong><Icon name='docker' /> Docker</strong>, <strong><Icon name='php' /> PHP</strong>, <strong><Icon name='wordpress' /> WordPress</strong> and <strong><Icon name='react' /> React.js + Next/Vite</strong>.
          </p>
          <p>
            But I also have a lot of experience with <strong>Vanilla JavaScript,  GitHub CI/CD, Self-Hosting, Go, Node.js, TailwindCSS, SASS, WebPack</strong>, and even <strong>iOS/Android App Development</strong>.
          </p>
        </div>
      </div>

      <div className='md:pl-10'>
        <Swiper
          effect="cards"
          grabCursor={true}
          slidesPerView={1}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: true }}
          cardsEffect={{
            rotate: true,
            slideShadows: true,
            perSlideOffset: 6,
            perSlideRotate: 6
          }}
          speed={1000}
          rewind={true}
          modules={[Autoplay, EffectCards]}
          className='w-[350px] h-auto'
        >
          {pictures.map((picture, index) => (
            <SwiperSlide key={`picture-${index}`}>
              <img
                loading='lazy'
                decoding='async'
                fetchPriority='low'
                width={345}
                height={600}
                src={picture}
                alt={`Picture ${index}`} key={`picture${index}`}
                className='w-[345px] h-[600px] rounded-3xl border border-white/10 shadow-lg object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
};

export default About;