import React, { useEffect } from 'react';
import './App.css';

// SVG components for icons
const EnvelopeIcon = () => (
  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-envelope">
    <path d="M2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H35C36.3807 2.5 37.5 3.61929 37.5 5V25C37.5 26.3807 36.3807 27.5 35 27.5H5C3.61929 27.5 2.5 26.3807 2.5 25V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37.5 5L20 17.5L2.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-map-pin">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
  </svg>
);

function App() {
  
  // Parallax effect and IntersectionObserver for transitions
  useEffect(() => {
    // Parallax logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const heroBg = document.querySelector('.hero-background img');
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
      }
      
      const polaroid = document.querySelector('.polaroid');
      if (polaroid && scrollY > 300) {
        const rotation = -4 + ((scrollY - 300) * 0.015);
        polaroid.style.transform = `rotate(${Math.min(rotation, 6)}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial manual trigger for above-the-fold components
    setTimeout(() => {
      document.querySelectorAll('.hero .reveal-fade-up, .navbar .reveal-fade-in').forEach(el => el.classList.add('active'));
    }, 100);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-fade-up:not(.hero *), .reveal-fade-in:not(.navbar *), .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-brand reveal-fade-in">Deepak & Arunima.</div>
        <div className="nav-links reveal-fade-in delay-200">
          <a href="#story" className="active">Our Story</a>
          <a href="#map">The Map</a>
          <a href="#letters">Letters</a>
        </div>
        <div className="nav-menu-btn reveal-fade-in delay-400">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/hero_portrait_1774540729247.png" alt="Deepak & Arunima Hero" />
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-subtitle reveal-fade-up">ESTABLISHED TWO THOUSAND TWENTY FOUR</div>
        <h1 className="hero-title reveal-fade-up delay-200">
          <span>Deepak &<br/>Arunima:</span><br/>
          <span>A Journey of<br/>Two Souls.</span>
        </h1>
        
        <div className="scroll-indicator reveal-fade-up delay-600">
          <button className="scroll-btn" onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDownIcon />
          </button>
          <span className="scroll-text">SCROLL TO BEGIN</span>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story-section">
        <div className="story-content">
          <div className="badge reveal-fade-up">THE BEGINNING</div>
          <h2 className="story-headline reveal-fade-up delay-200">
            A curated<br/>
            collection of<br/>
            <i>precious<br/>minutes</i> and<br/>
            quiet<br/>
            whispers.
          </h2>
          <p className="story-text reveal-fade-up delay-400">
            This monograph is more than a timeline; it is an editorial exploration of a shared life. From the cobblestone streets of old cities to the silent mornings at home, every frame captured here is a testament to a quiet, enduring grace.
          </p>
          <div className="reveal-fade-up delay-600">
            <a href="#" className="explore-link">EXPLORE THE ARCHIVE</a>
          </div>
        </div>
        
        <div className="story-visuals">
          <img src="/story_man_1774540754560.png" alt="Portrait" className="main-portrait reveal-scale delay-200" />
          <div className="polaroid reveal-scale delay-500">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Polaroid Memory" />
            <span>Paris, Autumn 2024</span>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="map-section">
        <div className="map-header">
          <div className="reveal-fade-up">
            <MapPinIcon />
          </div>
          <h2 className="map-heading reveal-fade-up delay-200">The Map</h2>
          <p className="map-subtext reveal-fade-up delay-400">
            Where the story began — the ancient land of Mithila paintings and timeless traditions.
          </p>
        </div>

        <div className="map-container reveal-scale delay-300">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57327.89671454382!2d86.05!3d26.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edeb0a69b0a4e3%3A0xc4053f4776a1e3bf!2sMadhubani%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madhubani, Bihar"
            ></iframe>
          </div>
          <div className="map-location-tag reveal-fade-up delay-600">
            <span className="map-dot"></span>
            Madhubani, Bihar — India
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section id="letters" className="letters-section">
        <div className="letters-card reveal-scale">
          <div className="reveal-fade-up delay-200">
            <EnvelopeIcon />
          </div>
          <h2 className="letters-heading reveal-fade-up delay-300">The Private Correspondence</h2>
          <p className="letters-text reveal-fade-up delay-400">
            A limited selection of handwritten letters and digital notes exchanged through the years. Accessible only to those with the golden thread.
          </p>
          <div className="reveal-fade-up delay-600">
            <button className="btn-primary">REQUEST ACCESS</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-brand reveal-fade-in delay-200">Deepak & Arunima</div>
        <div className="footer-links reveal-fade-in delay-400">
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="footer-copy reveal-fade-in delay-600">
          © 2024 DEEPAK & ARUNIMA ... A DIGITAL MONOGRAPH
        </div>
      </footer>
    </div>
  );
}

export default App;
