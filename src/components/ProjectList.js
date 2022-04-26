import React from 'react'
import Projects from './Projects'
import {projects} from '../Data';

const ProjectList = () => {
  return (
    <section className="space-y-8 block justify-center sm:px-4 py-5">
        <div className="text-center">
            <h1 className=" text-4xl font-bold ">Projects</h1>
            {/* <p className='plDescription mx-20 my-4'>Lorem Ipsumm lorem lorem lorem Lorem Ipsumm lorem lorem lorem Lorem Ipsumm lorem lorem lorem Lorem Ipsumm lorem lorem lorem</p> */}
        </div>

        

        <div className="cursor-pointer w-300 md:w-300 projectLists flex flex-wrap justify-between ">
            {projects.map((p) => (
                <Projects key={p.id} img={p.img} link={p.link} appName={p.appName}/>
            ))}
        </div>
    </section>
  )
}

export default ProjectList