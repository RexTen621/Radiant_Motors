import React from 'react'
import "./Contact.css";
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {MdOutlineVideoCall} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'

const Contact = () => {
  return (
    <section className='contact-wrapper'>
        <div className="paddings innerWidth flexCenter contact-container">
            {/* left section */}
            <div className="flexColStart left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing best services for you. We beleive in quality drive experiences and satisfaction</span>
                <div className="flexColStart contact-mode">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart ">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                    <div className="flexColStart detail">
                                <span className='spanText'>Call</span>
                                    <span className='spanText num'>+121 942 212 44</span>

                                </div>
                                </div>
                               
                                
                               

                               
                                   
                               
                            </div>
                            <div className="flexColCenter button">Call Now</div>
                        </div>
                         {/* 2nd mode */}
                        <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexStart icon">
                                            <BsFillChatDotsFill size={25}/>
                                            <div className="flexColStart detail">
                                            <span className='spanText'>Chat</span>
                                    <span className='spanText num'>+126 142 442 11</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Chat Now</div>

                                </div>
                    </div>
                    {/* second-row */}
                    <div className="flexStart row">
                        {/* first-mode */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                <BiMessageDetail size={25}/>
                                <div className="flexColStart detail">
                                <span className='spanText'>Message</span>
                                    <span className='spanText num' >+129 122 555 43</span>

                                </div>
                               
                                </div>
                            </div>
                            <div className="flexCenter button">Message</div>
                        </div>
                        {/* 2nd-mode */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdOutlineVideoCall size={25}/>
                                    <div className="flexColStart detail">
                                    <span className='spanText'>Meet</span>
                                    <span className='spanText num'>+122 144 892 73</span>

                                    </div>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Chat</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* right section */}
            <div className="right">
                <div className="image-container">
                    <img src="contact.jpg" alt="" />
                </div>
            </div>
        </div>

    
    </section>
  )
}

export default Contact