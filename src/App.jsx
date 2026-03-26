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

function App() {
  
  // Parallax effect for the hero image and polaroid rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const heroBg = document.querySelector('.hero-background img');
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      
      const polaroid = document.querySelector('.polaroid');
      if (polaroid && scrollY > 300) {
        const rotation = -4 + ((scrollY - 300) * 0.01);
        polaroid.style.transform = `rotate(${Math.min(rotation, 5)}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-brand">Deepak & Arunima.</div>
        <div className="nav-links">
          <a href="#story" className="active">Our Story</a>
          <a href="#map">The Map</a>
          <a href="#letters">Letters</a>
        </div>
        <div className="nav-menu-btn">
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
        
        <div className="hero-subtitle">ESTABLISHED TWO THOUSAND TWENTY FOUR</div>
        <h1 className="hero-title">
          <span>Deepak &<br/>Arunima:</span><br/>
          <span>A Journey of<br/>Two Souls.</span>
        </h1>
        
        <div className="scroll-indicator">
          <button className="scroll-btn" onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDownIcon />
          </button>
          <span className="scroll-text">SCROLL TO BEGIN</span>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story-section">
        <div className="story-content">
          <div className="badge">THE BEGINNING</div>
          <h2 className="story-headline">
            A curated<br/>
            collection of<br/>
            <i>precious<br/>minutes</i> and<br/>
            quiet<br/>
            whispers.
          </h2>
          <p className="story-text">
            This monograph is more than a timeline; it is an editorial exploration of a shared life. From the cobblestone streets of old cities to the silent mornings at home, every frame captured here is a testament to a quiet, enduring grace.
          </p>
          <a href="#" className="explore-link">EXPLORE THE ARCHIVE</a>
        </div>
        
        <div className="story-visuals">
          <img src="/story_man_1774540754560.png" alt="Portrait" className="main-portrait" />
          <div className="polaroid">
            {/* Using a placeholder model photo since our third internal generation failed, just to show beautiful UI */}
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Polaroid Memory" />
            <span>Paris, Autumn 2024</span>
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section id="letters" className="letters-section">
        <div className="letters-card">
          <EnvelopeIcon />
          <h2 className="letters-heading">The Private Correspondence</h2>
          <p className="letters-text">
            A limited selection of handwritten letters and digital notes exchanged through the years. Accessible only to those with the golden thread.
          </p>
          <button className="btn-primary">REQUEST ACCESS</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-brand">Deepak & Arunima</div>
        <div className="footer-links">
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="footer-copy">
          © 2024 DEEPAK & ARUNIMA ... A DIGITAL MONOGRAPH
        </div>
      </footer>
    </div>
  );
}

export default App;
