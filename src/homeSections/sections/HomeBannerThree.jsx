import React from "react";

import BannerThree from "../../utils/banner/BannerThree";

const HomeBannerThree = () => {
    return (
        <section>
            <BannerThree 
                // image={'https://t4.ftcdn.net/jpg/05/67/13/91/360_F_567139141_hdK3KIODa9pSMWWc8MCioCFZLKO3O94b.jpg'}
                logo={'https://wallpaper.forfun.com/fetch/f8/f8189d0a36f59ab9f519b38158383575.jpeg'}
                subheading='New Series'
                heading='House of The Dragon'
                date='December 1'
            />
        </section>
    );
};

export default HomeBannerThree;