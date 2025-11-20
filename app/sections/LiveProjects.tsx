import ProjectCard from '../components/ProjectCard';
import type Project from "../interfaces/Project"

const liveProjetcs: Project[] = [
  {
    title: 'BMGP - Best Multiplayer Game Possible',
    description: 'A multiplayer game where you can play with your friends right from the GitHub page.',
    link: 'https://github.com/gdsc0301/best-multiplayer-game-possible',
    video: 'https://youtube.com/embed/KWmbrvlznhs'
  },
  {
    title: 'Analogic Character Display',
    description: 'A simulation of analogic character display commonly seen at train stations, but using React and some CSS magic.',
    link: 'https://github.com/gdsc0301/analogic-character-display',
    video: 'https://www.youtube.com/embed/gf2MrlcLv_c'
  }, {
    title: 'RGB Snake',
    description: 'A snake game made in Vanilla JS, but the snake is a RGB rainbow.',
    link: 'https://github.com/gdsc0301/rgb-snake',
    video: 'https://www.youtube.com/embed/KWmbrvlznhs'
  }, {
    title: 'TestWizard',
    description: 'An application that makes easy to create custom tests and print them.',
    link: 'https://github.com/gdsc0301/test-wizard',
    video: 'https://www.youtube.com/embed/rTm-ONZOzu4'
  }
];

export default function LiveProjects() {
  return (
    <section className='live-projects' id='live-projects'>
      <div className="bg"></div>
      <div className="heading max-w-4xl mx-auto mb-10">
        <h2><span>Live</span> Projects</h2>
        <p className='text-lg'>
          Here are some projects that you can test it right now from the Github Page,
          &nbsp;including an online multiplayer game that you can play with your friends.
        </p>
      </div>
      <div className="projects">
        {liveProjetcs.map((project, index) => (
          <ProjectCard key={`liveProject${index}`} {...project} parentSelector='.live-projects' />
        ))}
      </div>
    </section>
  );
};