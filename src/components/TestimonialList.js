import React from 'react'
import Testimonial from './Testimonial'
import {testimonials} from "../Test"

const TestimonialList = () => {
  return (
    <section className="space-y-8 block justify-center sm:px-4 py-5">
        <div className="text-center">
            <h1 className=" text-4xl font-bold ">Testimonials</h1>
            
        </div>

        <div className="cursor-pointer w-300 md:w-300 projectLists flex flex-wrap justify-between ">
            {testimonials.map ((t) => (
                <Testimonial key={t.id} img={t.img} comment={t.comment} position={t.position} name={t.name}/>
            ))}
        </div>
    </section>
  )
}

export default TestimonialList