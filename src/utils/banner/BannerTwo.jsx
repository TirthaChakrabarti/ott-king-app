import React from "react";

import '../../styles/homeSections/banner2.css';

const BannerTwo = ({image, preTitle, title, date, logo}) => {
    // console.log(preTitle, title, date, logo);
    return (
        <section className="banner-two"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="banner-two-details">
                <p>{preTitle}</p>
                <p>{title}</p>
                <p>{date}</p>
                <p style={{logo: `url(${logo})`}}></p>
                <div className='banner-two-button'>
                    <button className='Button'>Watch Trailer</button>
                </div>
            </div>
        </section>
    )
}

export default BannerTwo;