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
  'https://i.imgur.com/5IHXSdG.jpg',
  'https://i.imgur.com/uPUaUQQ.jpg',
  'https://i.imgur.com/VxhtOIo.jpg',
  'https://i.imgur.com/4DK626n.jpg',
  'https://i.imgur.com/N1BxUK6.jpg',
  'https://i.imgur.com/mtbsVgX.jpg',
  'https://i.imgur.com/odJHeBz.jpg',
  'https://i.imgur.com/BdFHZjN.jpg',
  'https://i.imgur.com/9kM7i9k.jpg',
  'https://i.imgur.com/QutMiGv.jpg'
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
            I'm a <strong>Full Stack Developer</strong> with a passion for <strong>Frontend</strong>
            , <strong><Icon type='solid' name='cube' className='mr-1' />3D graphics</strong> and <strong>
              <Icon type='solid' name='gamepad' className='mr-1' />Game Development</strong>.
          </p>
          <p>
            My primary skills are <strong><Icon name='php'/>PHP</strong>, <Icon name='wordpress'/><strong>WordPress</strong> and <Icon name='react'/><strong>React.js</strong>.
          </p>
          <p>
            But I also have experience with <strong>Vanilla <Icon name='js-square' className='mr-1'/>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Next.js and Vite.js</strong>, <strong>Express.js</strong>, <strong>MySQL</strong>, <strong>Blender</strong>, <strong><Icon name='unity' className='mr-1'/>Unity</strong>, and everythign in between.
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