import React, { useRef } from 'react'
import './Portfolio.css'
import { PORTFOLIO } from '../../utils/data';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import Slider from 'react-slick';

const Portfolio = () => {

    const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrorws: false,
    responsive: [
      {
        breakpoint : 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  const slidRight = () => {
    slideRef.current.slickNext();
  }
  const slidLeft = () => {
    slideRef.current.slickPrev();
  }

  return (
    <section className='portfolio-container'>
        <h5>Portfolio</h5>

        <div className='portfolio-content'>
          <div className='arrow-Right' onClick={slidRight}>"
          <span className='material-symbols-outlined'>chevron_right</span>
          </div>
          <div className='arrow-Left' onClick={slidLeft}>"
          <span className='material-symbols-outlined'>chevron_left</span>
          </div>
          <Slider ref={slideRef} {...settings}>
            {PORTFOLIO.map((item) => (
                <PortfolioCard key={item.title} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  );
};

export default Portfolio