import { FaFacebookF, FaLinkedinIn, FaGithub, FaTrophy, FaCode, FaUsers, FaCertificate } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      {/* <div className="featureStrip">
        <div><FaTrophy /><b>Exciting Prizes</b><span>Win amazing rewards</span></div>
        <div><FaCode /><b>Build Real Solutions</b><span>Solve real-world problems</span></div>
        <div><FaUsers /><b>Learn & Network</b><span>Connect with experts</span></div>
        <div><FaCertificate /><b>Certificates</b><span>For all participants</span></div>
      </div> */}

      <div className="footerGrid">
        <div>
          <img src="/images/diu-logo.jpeg" alt="DIU" className="footerLogo" />
          <h3>DIU AI Hackathon 2026</h3>
          <p>Mentor and developer team showcase.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#mentors">Mentors</a>
          <a href="#developers">Developers</a>
          <a href="#about">About</a>
        </div>
        <div>
          <h4>Social</h4>
          <div className="footerSocials">
            <a href="https://www.facebook.com/daffodilaiclub"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/daffodilaiclub/posts/?feedView=all"><FaLinkedinIn /></a>
            
          </div>
        </div>
      </div>
      <div className="copyright">© 2026 DIU AI Hackathon. Made with  by Developer Team.</div>
    </footer>
  );
}
