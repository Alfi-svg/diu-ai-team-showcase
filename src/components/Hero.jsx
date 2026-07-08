import { FaArrowRight, FaUsers, FaUserTie, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroOverlay" />
      <div className="particleLayer" />

      <div className="heroContent reveal">
        <span className="badge">INNOVATE • BUILD • IMPACT</span>
        <h1>
          Meet the Minds Behind
          <strong>AI Hackathon 2026</strong>
        </h1>
        <p>
          A dedicated team showcase page introducing the mentors and developers
          powering DIU AI Hackathon 2026 with guidance, innovation, and passion.
        </p>

        <div className="heroActions">
          <a href="#mentors" className="primaryBtn">
            Meet Mentors <FaArrowRight />
          </a>
          <a href="#developers" className="secondaryBtn">
            Meet Developers
          </a>
        </div>

        <div className="heroStats">
          <div><FaUserTie /><b>3</b><span>Mentors</span></div>
          <div><FaCode /><b>5</b><span>Developers</span></div>
          <div><FaUsers /><b>DIU</b><span>Team Showcase</span></div>
        </div>
      </div>
    </section>
  );
}
