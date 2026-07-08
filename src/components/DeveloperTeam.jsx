import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const developers = [
  { image: '', name: 'Team Leader Name', role: 'Team Leader', department: 'Role / Department', github: '#', linkedin: '#', portfolio: '#', leader: true },
  { image: '', name: 'Developer Name', role: 'Developer', department: 'Role / Department', github: '#', linkedin: '#', portfolio: '#' },
  { image: '', name: 'Developer Name', role: 'Developer', department: 'Role / Department', github: '#', linkedin: '#', portfolio: '#' },
  { image: '', name: 'Developer Name', role: 'Developer', department: 'Role / Department', github: '#', linkedin: '#', portfolio: '#' },
  { image: '', name: 'Developer Name', role: 'Developer', department: 'Role / Department', github: '#', linkedin: '#', portfolio: '#' }
];

function DeveloperCard({ dev, large = false }) {
  return (
    <article className={`glassCard devCard ${large ? 'leaderCard' : ''}`}>
      <div className="avatar">{dev.image ? <img src={dev.image} alt={dev.name} /> : <span>👤</span>}</div>
      <h3>{dev.name}</h3>
      <h4>{dev.role}</h4>
      <p>{dev.department}</p>
      <div className="socials">
        <a href={dev.github} aria-label="GitHub"><FaGithub /></a>
        <a href={dev.linkedin} aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={dev.portfolio} aria-label="Portfolio"><FaGlobe /></a>
      </div>
    </article>
  );
}

export default function DeveloperTeam() {
  const leader = developers.find((dev) => dev.leader);
  const members = developers.filter((dev) => !dev.leader);

  return (
    <section id="developers" className="developerSection sectionPadding">
      <div className="sectionDivider" />
      <div className="sectionHeader reveal">
        <span className="miniTitle">DEVELOPER TEAM</span>
        <h2>Meet Our Developer Team</h2>
        <p>Built with passion.</p>
      </div>

      <div className="developerTree reveal">
        <div className="devConnector devLineVertical" />
        <div className="devConnector devLineHorizontal" />
        <div className="leaderWrap"><DeveloperCard dev={leader} large /></div>
        <div className="developerGrid">
          {members.map((dev, index) => <DeveloperCard dev={dev} key={dev.name + index} />)}
        </div>
      </div>
    </section>
  );
}
