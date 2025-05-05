import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Footer from './components/Footer'; // If you have a Footer component

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* All sections are now rendered on the home page */}
          <section id="home" className="scroll-mt-20">
            <Home />
          </section>
          
          <section id="services" className="scroll-mt-20">
            <Services />
          </section>
          
          <section id="reviews" className="scroll-mt-20">
            <Reviews />
          </section>
          
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </main>
        {/* Include Footer if you have one */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}