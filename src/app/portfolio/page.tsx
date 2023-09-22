import './components/style/Portfolio.scss';
import About from './sections/About';
import Contact from './sections/Contact';
import LiveProjects from './sections/LiveProjects';
import ProfessionalProjects from './sections/ProfessionalProjects';

export default function Portfolio() {
  return (
    <main>
      <About />
      <LiveProjects />
      <ProfessionalProjects />
      <Contact />
    </main>
  )
};