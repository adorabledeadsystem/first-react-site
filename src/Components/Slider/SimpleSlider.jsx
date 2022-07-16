import React, { Component } from 'react';
import Slider from "react-slick";
import {slides} from './slides.js'
import styles from './Slider.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {slides.map((item, index) => (<div key={index}><img className={styles.slideImg} alt='' src={item.link}/></div>))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;