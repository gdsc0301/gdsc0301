'use client'
import '../components/style/sections/About.scss';
import Image from 'next/image';

import 'swiper/scss';
import 'swiper/scss/effect-cards';
import 'swiper/scss/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import Icon from '../components/Icon';

const pictures = [
  'https://s3.guibr.com/portfolio/5IHXSdG.jpg',
  'https://s3.guibr.com/portfolio/N1BxUK6.jpg',
  'https://s3.guibr.com/portfolio/mtbsVgX.jpg',
  'https://s3.guibr.com/portfolio/BdFHZjN.jpg',
  'https://s3.guibr.com/portfolio/9kM7i9k.jpg',
  'https://s3.guibr.com/portfolio/QutMiGv.jpg'
];

const About = () => {
  return (
    <section className='aboutSection' id='about'>
      <div className="content">
        <h2 className="text-left">Hello <span className='inline-block animate-bounce'>✌🏼</span></h2>
        <div className="long">
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
            My primary skills are <strong><Icon name='docker'/> Docker</strong>, <strong><Icon name='php'/> PHP</strong>, <strong><Icon name='wordpress'/> WordPress</strong> and <strong><Icon name='react'/> React.js + Next/Vite</strong>.
          </p>
          <p>
            But I also have a lot of experience with <strong>Vanilla JavaScript,  GitHub CI/CD, Self-Hosting, Go, Node.js, TailwindCSS, SASS, WebPack</strong>, and even <strong>iOS/Android App Development</strong>.
          </p>
        </div>
      </div>
      <div className="pictures">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          slidesPerView={1}
          autoplay={{delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: true}}
          cardsEffect={{
            rotate: true,
            slideShadows: true,
            perSlideOffset: 6,
            perSlideRotate: 6
          }}
          speed={1000}
          rewind={true}
          modules={[Autoplay, EffectCards]}>
          {pictures.map((picture, index) => (
            <SwiperSlide key={`picture-${index}`}>
              <div className="item">
                <Image src={picture} alt={`Picture ${index}`} key={`picture${index}`} fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
};

export default About;