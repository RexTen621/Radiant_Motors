import React from 'react'
import './GetStarted.css'
import '../../utils/common'

const GetStared = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth flexCenter  g-container">
        <img className='colon1' src="./leftq.png" alt="" />
                <img className='colon2' src="./rightq.png" alt="" />
            <div className="flexColCenter inner-container">
            
                <span className='primaryText'>Get Started With Radiant Motors</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.</span><br />
                <span className='spanText'>Find your best value</span>
                <button className="button"><a href="mailto:uddiptamahato621@gmail.com">Get Started</a></button>
               
            </div>
        </div>
    </section>
  )
}


export default GetStared