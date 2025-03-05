import React from 'react'
import style from './style/About.module.css'
import about1 from '../assets/about1.jpg'

function About() {
  return (
    <>
    <div className={style.about}>
        <div className="about-left">
            <img src={about1} alt="" className={style.aboutimg} />
        </div>
        <div className="about-right">
            {/* <h3>About Crowdfunding</h3> */}
            <h2>What is Crowdfunding?</h2>
            <p>
            Crowdfunding is a way to raise funds from a large number of people, typically through an online platform. Instead of relying on a few big investors, creators, entrepreneurs, and changemakers can gather support from a global audience.
            </p>
            <p>
            Whether you're launching a business, funding a creative project, or supporting a cause, crowdfunding allows you to bring your vision to life with the help of a community.
            </p>
            
            <i className='fas fa-chevron-circle-left'></i>
        </div>
    </div>
    </>
  )
}

export default About;
