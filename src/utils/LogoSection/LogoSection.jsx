import React from 'react';

import '../../styles/homeSections/logoSection.css'; 

const LogoSection = ({ className, logoList = [] }) => {
  return (
    <section className='logo-section-wrapper'>
      <div className={`logo-section ${className}`}>
        {logoList.map((logo, index) => (
          <div className="logo-container" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="logo-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;

// import React from 'react';
// import '../../styles/homeSections/logoSection.css';

// const LogoList = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
//   'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
//   'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
//   'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
//   'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
// ];

// const LogosSection = () => {
//   return (
//     <div className="logo-section-wrapper">
//       <div className="logo-section">
//         {LogoList.map((logo, index) => (
//           <div className="logo-container" key={`logo-${index}`}>
//             <img src={logo} alt={`Logo ${index}`} className="logo-image" />
//           </div>
//         ))}
//         {/* Duplicate the list for seamless scrolling */}
//         {LogoList.map((logo, index) => (
//           <div className="logo-container" key={`logo-duplicate-${index}`}>
//             <img src={logo} alt={`Logo duplicate ${index}`} className="logo-image" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LogosSection;

