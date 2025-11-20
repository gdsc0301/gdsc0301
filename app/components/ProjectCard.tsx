import Project from '../interfaces/Project';

const ProjectCard = ({ title, description, link, image, video, parentSelector }: Project) => {
  return (
    <div className="relative block w-full max-w-[345px] mx-auto aspect-3/5 rounded-2xl border border-white/10 overflow-hidden z-5 group">
      {video && <iframe
        width='345'
        height='600'
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        allow='autoplay; encrypted-media; picture-in-picture; playsinline; loop;'
        src={`${video}?autoplay=1&loop=1&playsinline=1&controls=0&iv_load_policy=3&disablekb=1&fs=0`}>
      </iframe>
      }
      {image && <img src={image} alt={title} className="will-change-transform transform-gpu" />}

      <div
        className="absolute bottom-2 left-[5%] block w-[90%] p-4 select-none rounded-xl bg-linear-to-t from-slate-700 to-slate-500/1 backdrop-blur-lg transition-opacity duration-300 z-10"

      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="block mb-4 text-xs">{description}</p>
        <a
          className="inline-block px-4 py-2 text-xs font-semibold rounded-xl border border-white/0 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:border-white duration-300"
          href={link} target='_blank'
        >
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;