import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Topbar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Team from './components/Team';
import Search from './components/Search';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ClinicalUpdates from './components/ClinicalUpdates';
import Ayushman from './components/AyushmanBharat';
import Contact from '../src/components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ClinicalUpdates/>
      <Ayushman/>
      <Contact/>
      <Appointment />
      <Team />
      <Search />
      <Testimonial />
      <Blog />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
