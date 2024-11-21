import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './home/Homepage';
import PricingSection from './home/PriceSection';
import LogoSlider from './utils/LogoSection/LogoSlider';
import Footer from './Footer';


function App() {
  return (
    <section className='main'>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
