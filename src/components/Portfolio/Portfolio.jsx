import React from 'react'
import './Portfolio.css'
import { PORTFOLIO } from '../../utils/data';
import PortfolioCard from './PortfolioCard/PortfolioCard';

const Portfolio = () => {
  return (
    <section className='portfolio-container'>
        <h5>Portfolio</h5>

        <div className='portfolio-content'>
            {PORTFOLIO.map((item) => (
                <PortfolioCard key={item.title} details={item} />
            ))}
        </div>
    </section>
  );
};

export default Portfolio