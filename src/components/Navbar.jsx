import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
      <a href="#home" className="brand" aria-label="DIU AI Hackathon home">
        <img src="/images/diu-logo.jpeg" alt="Daffodil International University" />
      </a>

      <nav className="navLinks">
        <a href="#home">Home</a>
        <a href="#mentors">Mentors</a>
        <a href="#developers">Developers</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
