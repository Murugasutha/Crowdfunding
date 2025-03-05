import React, { useRef } from 'react'
import style from './style/Testimonials.module.css'
import next_icon  from '../assets/next-icon.png'
import back_icon  from '../assets/next-icon.png'
import user1 from '../assets/gallery1.jpg'
import user2 from '../assets/gallery2.jpg'

function Testimonials() {

  const slider = useRef();
    let tx = 0;

  const slideForward = () =>{
    if(tx > -70){
      tx -= 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx += 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className={style.testimonials}>
        <img src={next_icon} alt="" className={style.nextbtn} onClick={slideBackward}/>
        <img src={back_icon} alt="" className={style.backbtn} onClick={slideForward}/>
        <div className={style.slider}>
          <ul ref={slider}>
            <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur quam labore facilis cupiditate magni maxime quod! Facere veritatis ea ullam ipsum illum, suscipit ab quibusdam, odit culpa totam quam!</p>
            </div>
            </li>
            <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur quam labore facilis cupiditate magni maxime quod! Facere veritatis ea ullam ipsum illum, suscipit ab quibusdam, odit culpa totam quam!</p>
            </div>
            </li>
            <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur quam labore facilis cupiditate magni maxime quod! Facere veritatis ea ullam ipsum illum, suscipit ab quibusdam, odit culpa totam quam!</p>
            </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials