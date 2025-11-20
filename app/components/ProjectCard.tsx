'use client'
import './style/ProjectCard.scss';
import 'atropos/css';
import Atropos from 'atropos/react';
import Project from '../interfaces/Project';

const window = globalThis as any;

const ProjectCard = ({ title, description, link, image, video, parentSelector }: Project) => {
  return (
    <Atropos eventsEl={parentSelector} commonOrigin={true} rotateXInvert={true}>
      <div className="project-card">
        {video && <iframe
          width='345'
          height='460'
          data-atropos-offset="-10"
          allow='autoplay; encrypted-media; picture-in-picture; playsinline; loop;'
          src={`${video}?autoplay=1&loop=1&playsinline=1&controls=0&iv_load_policy=3&disablekb=1&fs=0`}>
        </iframe>
        }
        {image && <img src={image} alt={title} />}
        <div className="info" data-atropos-offset="3">
          <h3 data-atropos-offset="10">{title}</h3>
          <p data-atropos-offset="10">{description}</p>
          <a data-atropos-offset="20" href={link} target='_blank'>View Project</a>
        </div>
      </div>
    </Atropos>
  )
}

export default ProjectCard;