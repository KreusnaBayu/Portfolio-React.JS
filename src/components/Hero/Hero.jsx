import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences </h2>
            <p>
                Passionate Website Developer & Mobile Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/react.png" alt="" />
                </div>
                <img src='./assets/images/website.png' alt="" />
            </div>
            <div>
            <div className='tech-icon'>
                    <img src="./assets/images/html.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/css-3.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/js.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/flutter.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero