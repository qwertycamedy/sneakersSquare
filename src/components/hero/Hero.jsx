import React, { useState } from "react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import MyBtn from "../../UI/btn/MyBtn";
import heroImg1 from "../../assets/img/hero-1.png";
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

const Hero = () => {
  const [heroSlides, setHeroSlides] = useState([
    {
      id: 0,
      title: "Just Do It!",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: "uppercase",
        text: "BUY",
      },
    },
    {
      id: 1,
      title: "Basketball in yourself!",
      subtitle: "As Kobe Bryant willed...",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: "uppercase",
        text: "BUY",
      },
    },
    {
      id: 2,
      title: "Sneaker's culture!",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: " uppercase",
        text: "BUY",
      },
    },
  ]);

  const navPrev = React.useRef(null);
  const navNext = React.useRef(null);

  return (
    <section className="hero">
      <div className="container__inner">
        <div className="hero__inner">
          <div className="hero__slide-outer">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={10}
              slidesPerView={1}
              grabCursor
              loop
              speed={700}
              navigation={{
                prevEl: navPrev.current,
                nextEl: navNext.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navPrev.current
                  swiper.params.navigation.nextEl = navNext.current
        
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                })
              }}
            >
              {heroSlides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div
                    style={{ backgroundColor: slide.bgColor }}
                    className="hero__content"
                  >
                    <img
                      className="hero__img"
                      src={slide.img}
                      alt={slide.title}
                    />
                    <h1 className="hero__title capitalize title-main">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="hero__subtitle">{slide.subtitle}</p>
                    )}
                    <MyBtn classNames={slide.btn.classNames}>
                      {slide.btn.text}
                    </MyBtn>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hero__slide-nav">
              <button className='hero__slide-nav-prev' ref={navPrev}>
                <SlArrowLeft />
              </button>
              <button className='hero__slide-nav-next' ref={navNext}>
                <SlArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
