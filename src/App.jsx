import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UniversitySection from './components/UniversitySection';
import MentorSection from './components/MentorSection';
import DeveloperTeam from './components/DeveloperTeam';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UniversitySection />
        <MentorSection />
        <DeveloperTeam />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
