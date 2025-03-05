import React from 'react'
import style from '../components/style/Hero.module.css'
import Button from './Button'

function Hero({theme}) {
    console.log("Hero componenet loaded")
    return (
        <div className={`${style.hero} ${theme === 'dark' ? style.dark : ''}`} >
            <div className={style.text}>
                {/* <br /><br /><br /><br /><br /> */}
                <h1>
                    <span className={style.blackText}>Empower Dreams,</span> 
                    <span className={style.greenText}> Fund the Future</span>
                </h1>
                <p>Start, support, and succeed with our crowdfunding platform.</p>
                <Button className={style.button}>Start a Campaign</Button>
            </div>
        </div>
    )
}

export default Hero;
