import React from "react";

import '../../styles/homeSections/staticList.css';

const StaticShowList = ({ movies = [] }) => {
    
    return (
        <div className="static-cardlist-parent">
            <div className="static-cardlist-wrapper">
                <section className="static-cardlist">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <img src={movie} alt={`Movie ${index + 1}`} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default StaticShowList;
