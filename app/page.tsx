import './page.css';
import FadingTitle from './components/FadingTitle';
import About from './sections/About';
import LiveProjects from './sections/LiveProjects';
import ProfessionalProjects from './sections/ProfessionalProjects';
import Contact from './sections/Contact';

export default function Home() {

  return (
    <main className='
      relative
      mx-auto 
      pt-24 px-4
      grid gap-12
      container
    '>
      <About />
      <ProfessionalProjects />
      <LiveProjects />
      <Contact />
      <FadingTitle />
    </main>
  )
}
