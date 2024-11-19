import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";

// import '@fortawesome/fontawesome-free/css/all.min.css';

import './Header.css';
import PriceSection from "./home/PriceSection";

const Header = () => {

    const [showPriceSection, setShowPriceSection] = useState(false);

    const priceSectionClickHandler = () => {
        sessionStorage.setItem('lastVisitedUrl', window.location.href);
        setShowPriceSection(true);  
      };
    
      const hidePriceSection = () => {
        setShowPriceSection(false);
      }

    return (
        <section className="header">
            <div className="app-logo">
                <span className="logo-text">MyApp</span>
            </div>
            <div className="header-options">
                <Link style={{ textDecoration: 'none' }} to={"/"}>
                    <div className="home-link">Home</div>
                </Link>
                
                {/* <Nav>
                    <Nav.Link 
                        as={Link} 
                        to="/pricing" 
                        className="navlink" 
                        onClick={priceSectionClickHandler}
                    >
                        <Button variant="primary">Subscribe</Button>
                    </Nav.Link>
                </Nav>
                {
                    showPriceSection && <PriceSection hidePriceSection={hidePriceSection}/>
                } */}

                <Link to="/pricing">
                    <button className="header-button">Subscribe</button>
                </Link>

            </div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
            </div>
        </section>
    )
}

export default Header;