import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexStart f-container">
            {/* leftSection */}
            <div className="flexColStart f-left">
                <img src="./logo.png" width={160} alt="" />
                <span className='secondaryText'>Your trusted destination for new and pre-owned cars, where quality meets affordability.</span>

            </div>
            {/* rightSection */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145,Texas,FL 7875,USA</span>
                <div className="flexStart f-end">
                <span className='spanText'>Car</span>
                <span className='spanText'>Services</span>
                <span className='spanText'>Products</span>
                <span className='spanText'>About Us</span>

                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer