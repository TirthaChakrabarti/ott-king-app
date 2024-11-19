import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './home/Homepage';
import PricingSection from './home/PriceSection';


function App() {
  return (
    <section className='main'>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
    </section>
  );
}

export default App;
