import './page.scss';
import FadingTitle from './components/FadingTitle';
import About from './sections/About';
import LiveProjects from './sections/LiveProjects';
import ProfessionalProjects from './sections/ProfessionalProjects';
import Contact from './sections/Contact';

export default function Home() {

  return (
    <main>
      <About />
      <LiveProjects />
      <ProfessionalProjects />
      <Contact />
      <FadingTitle />
    </main>
  )
}
