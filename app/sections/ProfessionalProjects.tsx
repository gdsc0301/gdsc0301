import ProjectCard from '../components/ProjectCard';
import type Project from "../interfaces/Project"

const privateProjects: Project[] = [
  {
    title: 'Embroker',
    description: 'A WordPress based, institutional + blog website.',
    link: 'https://www.embroker.com/',
    video: 'https://www.youtube.com/embed/l7_qw4GswwA'
  },
  {
    title: 'Veris Residential',
    description: 'A website for a new Building project of a real estate company in the United States, New York.',
    link: 'https://verisresidential.com/',
    video: 'https://www.youtube.com/embed/v__iQjzRsHA'
  },
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
    title: 'Raizen RI',
    description: 'The IR website of one of the biggest companies in Brazil in the Industrial Services field.',
    link: 'https://ri.raizen.com.br/',
    video: 'https://www.youtube.com/embed/ysd1gWLs9LI'
  }, {
    title: 'CBA RI',
    description: 'The IR website of one of the biggest companies in Brazil in the Aluminum field.',
    link: 'https://ri.cba.com.br/',
    video: 'https://www.youtube.com/embed/MWKZ56pq4g8'
  }
];

export default function ProfessionalProjects() {
  return (
    <section
      className='
        p-4 md:p-16
        border border-white/5
        rounded-3xl
        bg-slate-800/25
      '
      id='professional-projects'
    >
      <div className="bg"></div>
      <div className="heading mb-10">
        <h2>
          <span>
            Professional
          </span>
          Projects
        </h2>

        <p className="max-w-4xl mx-auto text-xl">
          These are the most important projects I did during my career as a developer.
          &nbsp;Of course they are in a private repository, but you can see the demo videos below and access them by clicking on the button.
        </p>
      </div>
      <div className="professional-projects grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
        {privateProjects.map((project, index) => (
          <ProjectCard key={`liveProject${index}`} {...project} parentSelector='.professional-projects' />
        ))}
      </div>
    </section>
  );
};