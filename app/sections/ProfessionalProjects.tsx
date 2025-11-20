import ProjectCard from '../components/ProjectCard';
import type Project from "../interfaces/Project"

const privateProjects: Project[] = [
  {
    title: 'Fetner 266w96',
    description: 'A website for a new Building project of a real estate company in the United States, New York.',
    link: 'https://266w96.com/',
    video: 'https://www.youtube.com/embed/nFHwA6mmFMg'
  },
  {
    title: 'Portal de Teleconferências - MZ Group',
    description: 'A webcast portal made out of React.JS and WordPress, with thousands of data and very complex filters.',
    link: 'https://portal.mzgroup.com/',
    video: 'https://www.youtube.com/embed/c_upWJqu8CE'
  }, {
    title: 'MRS RI',
    description: 'A IR website for one of the biggest companies in Brazil called MRS, they work with the Rails transportation field.',
    link: 'https://ri.mrs.com.br/',
    video: 'https://www.youtube.com/embed/65lkZvAokgw'
  }, {
    title: 'Priner RI',
    description: 'The IR website of one of the biggest companies in Brazil in the Industrial Services field.',
    link: 'https://ri.raizen.com.br/',
    video: 'https://www.youtube.com/embed/ysd1gWLs9LI'
  }, {
    title: 'Raízen RI',
    description: 'The IR website of one of the biggest companies in Brazil in the Industrial Services field.',
    link: 'https://ri.priner.com.br/',
    video: 'https://www.youtube.com/embed/RE1KsvQBq9M'
  }, {
    title: 'CBA RI',
    description: 'The IR website of one of the biggest companies in Brazil in the Aluminum field.',
    link: 'https://ri.cba.com.br/',
    video: 'https://www.youtube.com/embed/MWKZ56pq4g8'
  }, {
    title: 'Veris Residential',
    description: 'A website for a new Building project of a real estate company in the United States, New York.',
    link: 'https://verisresidential.com/',
    video: 'https://www.youtube.com/embed/v__iQjzRsHA'
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