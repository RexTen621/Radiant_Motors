import React, { useState } from 'react'
import{
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState

} from 'react-accessible-accordion'
import"react-accessible-accordion/dist/fancy-example.css";
import{MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion';

const Value = () => {
  return (
   <section className="v-wrapper">
    <div className="paddings innerWidth flexCenter v-container">
      {/* leftSection */}
      <div className="v-left">
        <div className="image-container">
          
        <img src="value.jpg" alt="" />

        </div>

      </div>
      {/* rightSide */}
      <div className="flexColStart v-right">
        <span className='orangeText' >Our Value</span><br />
        <span className='primaryText'>Value and Services We Give to You </span><br />
        <span className='secondaryText'>
          We always ready to help by providing the best services for you.
          
        </span>
        <Accordion
        className='accordion'
        allowMultipleExpanded={false}
        preExpanded={[0]}
        
        >
          {data.map((item,i)=>{
            const[className,setClassname]=useState(null)
            return(
              <AccordionItem className={`accordionItem ${className}`}key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                      {({expanded})=>expanded ? setClassname("expanded") : setClassname("collapsed")}
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className='primaryText'>{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20}/>
                    </div>
                  </AccordionItemButton>
                  
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
              </AccordionItem>
            ); 
          })}


        </Accordion>
      </div>
      
      
      
      
      
      </div> 
   </section>
  )
}

export default Value