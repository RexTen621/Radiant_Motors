import React from 'react'
import{Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import "Swiper/css";
import "./Cars.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common';


const Cars = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth c-container">
            <div className="flexColStart c-head">

            <span className="orangeText">Best Choices</span>
            <span className='primaryText'>Popular Cars</span>
            </div>


          <Swiper{...sliderSettings}>
          <SliderButtons/>
          {
           

              data.map((card,i)=>(
                <SwiperSlide key={i}>

                  <div className='c-card'>
                    <img src={card.image} alt="" /><br />
                    <span className='c-price'>
                      <span className='spanText' >$</span><span className='spanText'>{card.price}</span><br/>
                      <span className='primaryText'>{card.name}</span><br />
                      <span className='detail'>{card.detail}</span>
                    </span>
                  </div>

                </SwiperSlide>
              ))
            
            
            }

          </Swiper>
            
 

        </div>

    </section>
  )
}

export default Cars

const SliderButtons=()=>{
  const swiper= useSwiper();
  return(
    
    <div className="flexCenter c-buttons">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button><button onClick={()=>swiper.slideNext()}>&gt;</button>

    </div>
  )

}