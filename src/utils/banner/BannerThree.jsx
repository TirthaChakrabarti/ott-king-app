import React from 'react'

import '../../styles/homeSections/banner3.css'
import { Button } from 'react-bootstrap'

const BannerThree = ({image, heading, subheading, logo, date}) => {
  return (
    <section className='banner-three-parent'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <div className="banner-three-details">
          <p>{heading}</p>
          <p>{subheading}</p>
          <p>Streming on {date}</p>
        </div>
        <div className="banner-three-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className='banner-three-button'>
          <button className='Button'>Watch Trailer</button>
        </div>
    </section>
  )
}

export default BannerThree