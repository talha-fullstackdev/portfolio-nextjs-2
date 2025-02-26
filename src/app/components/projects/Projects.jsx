import React from 'react'
import projectsData from './data'
import Image from 'next/image'
const Projects = () => {
  return (
    <div className=''>
        <h2 className=''>Projects</h2>
        <div className="">
            {projectsData.map((project)=>(
                <div key={project.name} className="" >
                    <Image src={project.image} alt='project image' priority ></Image>
                    <div className="">
                        <p className=''>{project.tech}</p>
                        <span className=''>{project.githubIcon}</span>
                        <span className=''>{project.linkIcon}</span>
                    </div>
                    <div className="">
                        <p className=''>{project.name}</p>
                        <p className=''>{project.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
// import React from 'react'
// import projectsData from './data'
// import Image from 'next/image'

// const Projects = () => {
//   return (
//     <div className="py-10 px-5  text-white">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projectsData.map((project) => (
//           <div 
//             key={project.name} 
//             className=" p-4 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
//           >
//             {/* Project Image */}
//             <div className="relative w-full h-44  overflow-hidden">
//               <Image 
//                 src={project.image} 
//                 alt="Project image" 
//                 layout="fill" 
//                 objectFit="cover"
//                 className="rounded-xl"
//                 priority
//               />
//             </div>

//             {/* Tech Stack */}
//             <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
//               <p className="text-blue-400">{project.tech}</p>
//               <div className="flex gap-2">
//                 <span className="text-lg">{project.githubIcon}</span>
//                 <span className="text-lg">{project.linkIcon}</span>
//               </div>
//             </div>

//             {/* Project Name & Year */}
//             <div className="flex items-center justify-between mt-3">
//               <p className="text-lg font-medium">{project.name}</p>
//               <p className="text-gray-400">{project.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Projects
