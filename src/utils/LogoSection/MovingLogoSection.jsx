import React from "react";
import Marquee from 'react-fast-marquee';

import '../../styles/homeSections/movingLogoSection.css';

const MovingLogoSection = () => {
    return (
        <section className="parent">
            <Marquee className="moving-logo-section">
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s"></img></div>
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg"></img></div>
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE"></img></div>
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw"></img></div>
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ"></img></div>
                <div className="moving-logo-container"><img className="moving-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s"></img></div>
            </Marquee>
        </section>
    )
}

export default MovingLogoSection;


// import React from "react";
// import Marquee from "react-marquee-slider";
// import { v4 as uuidv4 } from "uuid"; 
// import './LogoMarquee.css'

// const logos = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s"
// ]; 

// const LogoMarquee = () => {
//   return (
//     <div className="marquee-container">
//       <Marquee velocity={20} minScale={0.7} resetAfterTries={200}>
//         {logos.map((logo) => (
//           <div key={uuidv4()} className="logo-wrapper">
//             <img src={logo} alt="Logo" className="logo" />
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default LogoMarquee;
