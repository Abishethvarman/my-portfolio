import React from 'react'
import "./about.css"
import Award from "../../img/Award.png"

export const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                className="a-img" />
              </div>
          </div>
        <div className="a-right">
          <h1 className='a-title'>About me</h1>
          <p className="a-sub"> Im Abishethvarman from Batticaloa</p>
          <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam id magnam facere reiciendis assumenda delectus, consequatur vel sint exercitationem iste dolorum omnis quibusdam, hic quaerat, tempore quod temporibus possimus.</p>
          {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="abishethvarman-v" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://lk.linkedin.com/in/abishethvarman-v?trk=profile-badge">Abishethvarman V</a></div> */}
              
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Oscar award</h4>
              <p>Lorem ipsum dolor sit amet consectetur a</p>
            </div>
        </div>
        </div>
    </div>
  )
}


