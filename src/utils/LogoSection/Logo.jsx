import React from "react";

const Logo = ( {image} ) => {
    return (
        <section className="logo-parent">
            <div className="logo" style={{ backgroundImage: `url(${image})` }}></div>
        </section>
    )
}

export default Logo;