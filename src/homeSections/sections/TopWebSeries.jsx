import React from "react";

import LargeSmallSection from "../../utils/LargeSmallList/LargeSmallList";

const DealOfTheWeek = () => {

    const largeCardData = [
        { image: "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/123982-night-urban.jpg", name: "The Wasted Times", season: "Season 1" }
    ];

    const smallCardData = [
        { image: "https://wallpaper.forfun.com/fetch/19/19b7a7201a24d6d3934b5da031c38307.jpeg", name: "Card 1", season: "Season 1" },
        { image: "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg", name: "Card 2", season: "Season 2" },
        { image: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D", name: "Card 3", season: "Season 3" },
        { image: "https://e0.pxfuel.com/wallpapers/240/1/desktop-wallpaper-cinematic-cool-cinematic.jpg", name: "Card 4", season: "Season 4" },
        { image: "https://e0.pxfuel.com/wallpapers/149/40/desktop-wallpaper-preview-cliffs-destruction-city-landscape-waterfall.jpg", name: "Card 5", season: "Season 5" },
        { image: "https://wallpapercave.com/wp/wp3704357.jpg", name: "Card 6", season: "Season 6" }
    ];

    return (
        <div>
            <LargeSmallSection Heading="Top Web Series" largeCardData={largeCardData} smallCardData={smallCardData} />
        </div>
    );
};

export default DealOfTheWeek;