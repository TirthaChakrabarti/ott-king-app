import React from "react";
import { Link } from "react-router-dom";

import '../../styles/home/priceCard.css';

import LogoSection from '../../utils/LogoSection/LogoSection';

// const LogoList = [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
//     'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
//     'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
//     'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
//     'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
// ]

const PriceCard = (
    {
        name, 
        price, 
        feature1, 
        feature2, 
        feature3, 
        feature4, 
        logoList,
        onShowFullList
    }) => {

    const smallerLogoList = logoList.slice(0, 8);

    return (
        <div className="plan-card">
           <div>
                <LogoSection className="pricecard-logo-section" logoList={smallerLogoList} />
                <button
                    className="plan-card-show-list-button"
                    onClick={onShowFullList}
                >
                    Show Full List
                </button>
            </div>
            <hr style={{color: 'gold'}}/>
            <div>
                <p id="name">{name}</p>
                <p id="quality">{price}</p>
                <Link to={'/log-in'}>
                    <button 
                        className="plan-card-subscribe-button"
                    >
                        Choose Plan
                    </button>
                </Link>
                <div className="features-container">
                    <p className="features">{feature1}</p>
                    <p className="features">{feature2}</p>
                    <p className="features">{feature3}</p>
                    <p className="features">{feature4}</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard;