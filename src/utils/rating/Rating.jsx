import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ value, className, totalStar }) => {

    const numFullStars = Math.floor(value);
    const numHalfStars = Math.round(value) - Math.floor(value);
    const numEmptyStars = totalStar - ( numFullStars + numHalfStars );

    return (
        <section 
            className={`rating ${className}`}
        > 
            {
                Array.from({length: numFullStars}).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStar} key={idx} style={{ color: 'rgb(213, 181, 1)' }}/>
                    )
                )
            }
            {
                Array.from({length: numHalfStars}).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStarHalfAlt} key={idx} style={{ color: 'rgb(213, 181, 1)'}}/>
                    )
                )
            }
            {
                Array.from({length: numEmptyStars}).map(
                    (item, idx) => (
                        <FontAwesomeIcon icon={faStarEmpty} key={idx}/>
                    )
                )
            }
        </section>
    )
}

Rating.defaultProps = {
    value: 5,
}

export default Rating