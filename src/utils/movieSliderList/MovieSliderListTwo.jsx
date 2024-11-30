import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/homeSections/movieSliderListTwo.css';

const MovieSlider = ({ title = "Movies", category, movies = [] }) => {
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
        <div className="cardlist-two-parent">
            <section className="cardlist-two-title">{title}</section>
            <div className="cardlist-two-wrapper">
                {!isAtStart && (
                    <button className="arrow left-arrow" onClick={scrollLeft}>
                        &#10094;
                    </button>
                )}
                <section ref={scrollContainerRef} className="cardlist-two">
                    {movies.map((movie, index) => (
                        <div key={index} >
                            <Link 
                                to={`/${category}/${index}`}
                                state={{ category }}
                            >
                                <img src={movie.poster} alt={`Movie ${index + 1}`} />
                            </Link>
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
