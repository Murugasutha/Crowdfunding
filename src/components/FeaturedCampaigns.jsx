import React from 'react'
import style from './style/FeaturedCampagin.module.css';
import gallery1 from '../assets/gallery1.jpg'
// import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
// import gallery5 from '../assets/gallery5.jpg'


function FeaturedCampaigns() {
    const images = [gallery1, gallery3, gallery4];

    return (
        <div className={style.campaigns}>
            {images.map((image, index) => (
                <div key={index} className={style.card}>
                    <img src={image} alt={`Campaign ${index + 1}`} className={style.cardImage} />
                    <div className={style.cardContent}>
                        <h3>Campaign {index + 1}</h3>
                        <p>Support this campaign to make a difference.</p>
                        <button className={style.btn}>Donate Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeaturedCampaigns;
