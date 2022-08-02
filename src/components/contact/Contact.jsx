import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"


const Contact = () => {
  return (
    <div className='c'>Contact
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets discusss it</h1>
                    <div className="info">
                      <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        +41541485451515
                      </div>  
                      <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        abc@gmail.com
                      </div> 
                      <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        12B ara gysb
                      </div> 
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>wqydeby dbud</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, earum optio vitae odit tenetur nam vero inventore reprehenderit voluptates sapiente.
                    </p>
                    <form>
                        <input type="text" placeholder='Name' name="user_name"/>
                        <input type="text" placeholder='Subject' name="subject"/>
                        <input type="text" placeholder='Email' name="user_email"/>
                        <textarea name="message" id=""  rows="5" placeholder='Message'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default Contact