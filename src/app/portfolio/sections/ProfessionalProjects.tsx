import ProjectCard from '../components/ProjectCard';
import type Project from "../interfaces/Project"

const privateProjects: Project[] = [
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
  }
];

export default function ProfessionalProjects() {
  return (
    <section className='professional-projects' id='professional-projects'>
      <div className="bg"></div>
      <div className="heading mb-10">
        <h2><span>Professional</span> Projects</h2>
        <p className="max-w-4xl mx-auto text-xl">
          These are the most important projects I did during my career as a developer.
          &nbsp;Of course they have a private repository, but you can see the demo videos below and access them by clicking on the button.
        </p>
      </div>
      <div className="projects">
        {privateProjects.map((project, index) => (
          <ProjectCard key={`liveProject${index}`} {...project} parentSelector='.professional-projects' />
        ))}
      </div>
    </section>
  );
};