import React from 'react'
import projectsData from './data'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="py-10 px-6 md:px-20 pb-10 md:pb-20  text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div 
            key={project.name} 
            className=" p-4 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="relative w-full h-52  overflow-hidden">
              <a href={project.link} target='_blank'><Image 
                src={project.image} 
                alt="Project image" 
                layout="fill" 
                objectFit="cover"
                className="rounded-xl cursor-pointer"
                priority
              />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center justify-between text-gray-400 text-sm mt-3 md:mt-6">
              <p className="text-slate-400">{project.tech}</p>
              <div className="flex gap-2">
                <a className="text-lg hover:text-blue-400 cursor-pointer" href={project.github} target='_blank'>{project.githubIcon}</a>
                <a className="text-lg hover:text-blue-400 cursor-pointer" href={project.link} target='_blank'>{project.linkIcon}</a>
              </div>
            </div>

            {/* Project Name & Year */}
            <div className="flex items-center justify-between mt-3">
              <a href={project.link} target='_blank'>
              <p className="text-lg font-medium cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-4">{project.name}</p>
              </a>
              <p className="text-gray-400">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
