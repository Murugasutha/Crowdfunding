import React from 'react'
import style from '../components/style/Campagin.module.css'
import campagin1 from '../assets/campagin1.jpg'
import Button from './Button'

function Campagins() {
    return (
        <>
        <div className={style.campagins}>
            <div className={style.campagin}>
                <img src={campagin1} alt="" />
                <div className={style.caption}>
                    <p>Campagin 1</p>
                </div>
            </div>
            <div className={style.campagin}>
                <img src={campagin1} alt="" />
                <div className={style.caption}>
                    <p>Campagin 2</p>
                </div>
            </div>
            <div className={style.campagin}>
                <img src={campagin1} alt="" />
                <div className={style.caption}>
                    <p>Campagin 3</p>
                </div>
            </div>
        </div>
        <Button className={style.button}>Explore All Campagins</Button>
        </>
    )
}

export default Campagins;
