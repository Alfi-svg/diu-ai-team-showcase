import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const mentors = [
  { image: '', name: 'Mentor Name', designation: 'AI Engineer', company: 'Organization', linkedin: '#', email: 'mailto:mentor@example.com' },
  { image: '', name: 'Mentor Name', designation: 'Data Scientist', company: 'Organization', linkedin: '#', email: 'mailto:mentor@example.com' },
  { image: '', name: 'Mentor Name', designation: 'ML Researcher', company: 'Organization', linkedin: '#', email: 'mailto:mentor@example.com' }
];

export default function MentorSection() {
  return (
    <section id="mentors" className="mentorSection sectionPadding">
      <div className="blurShape blurLeft" />
      <div className="sectionHeader reveal">
        <span className="miniTitle">MENTOR TEAM</span>
        <h2>Meet Our Mentors</h2>
        <p>Guiding the next generation of AI innovators.</p>
      </div>

      <div className="mentorTree reveal">
        <div className="connector connectorVertical" />
        <div className="connector connectorHorizontal" />
        {mentors.map((mentor, index) => (
          <article className={`glassCard mentorCard mentor${index + 1}`} key={mentor.name + index}>
            <div className="avatar">{mentor.image ? <img src={mentor.image} alt={mentor.name} /> : <span>👤</span>}</div>
            <h3>{mentor.name}</h3>
            <h4>{mentor.designation}</h4>
            <p>{mentor.company}</p>
            <div className="socials">
              <a href={mentor.facebook} aria-label="Linkedin"><FaLinkedin /></a>
              <a href={mentor.email} aria-label="Email"><FaEnvelope /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
