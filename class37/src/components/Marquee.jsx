import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SlideImg from '../assets/slider.png'

const Slider = SlickSlider.default || SlickSlider;

const Marquee = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div>
       <Slider {...settings}>
      <div>
        <img src={SlideImg} alt="" />
      </div>
      <div>
        <img src={SlideImg} alt="" />
        </div>
    </Slider>
    </div>
  )
}

export default Marquee
