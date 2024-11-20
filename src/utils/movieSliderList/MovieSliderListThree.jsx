import React, { useEffect, useRef, useState } from "react";

import '../../styles/homeSections/movieSliderListThree.css';

const MovieSlider = ({ title = "", movies = [] }) => {
    const scrollContainerRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setIsAtStart(container.scrollLeft === 0);
            setIsAtEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth);
        }
    }

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="cardlist-three-parent">
            <section className="cardlist-three-title">{title}</section>
            <div className="cardlist-three-wrapper">
                {!isAtStart && (
                    <button className="arrow left-arrow" onClick={scrollLeft}>
                        &#10094;
                    </button>
                )}
                <section ref={scrollContainerRef} className="cardlist-three">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <img src={movie} alt={`Movie ${index + 1}`} />
                        </div>
                    ))}
                </section>
                {!isAtEnd && (
                    <button className="arrow right-arrow" onClick={scrollRight}>
                        &#10095;
                    </button>
                )}
            </div>
        </div>
    );
}

export default MovieSlider;
