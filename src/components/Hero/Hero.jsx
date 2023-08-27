import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

 const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="paddings flexCenter innerWidth hero-container">

            <div className="flexColStart left-section">
                <div className="circle">
                    
                    
                </div>
                <div className="hero-tittle">
                <h1>Empowering<br/> Your Road<br/> Ahead.</h1>
                </div>
                <div className="flexColStart secondaryText hero-des">
                    <span>Discover automotive excellence at RADIANT Motors </span>
                    <span>with curated selection, personalized service .</span>

                </div>
                <div className='flexCenter search-bar'>
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>

                </div>
                <div className="flexCenter  stats">
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={5500} end={6000} duration={4}/>
                        <span>+</span>
                        
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                        
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={500} end={800} duration={3}/>
                        <span>+</span>
                        
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                        
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={28} end={60} duration={4}/>
                        <span>+</span>
                        
                        </span>
                        <span className='secondaryText'>Winning Awards</span>
                        
                    </div>
                </div>
            </div>
            {/* right section */}
            <div className="flexCenter right-section">
                <div className="image-container">
                <img src="./heroImage.jpg" alt="" />

                </div>

                
            </div>

        </div>




    </div>
  )
}
export default Hero
