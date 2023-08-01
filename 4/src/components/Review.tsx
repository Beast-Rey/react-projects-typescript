import { useState } from 'react'
import people from '../data'

export default function Review() {
  const [index, setIndex] = useState<number>(0)
  const {name, job, image, text} = people[index]
  return (
    <section className='bg-[#fff] rounded-[0.25rem] ease-linear duration-300 text-center py-6 px-8'>
        <div className='relative w-[150px] h-[150px] rounded-[50%] my-0 mx-auto mb-6'>
            <img src={image} alt={name} className='w-full block h-full object-cover rounded-[50%] relative'/>
            <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-[50%]'>Quote</span>
        </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
            <button>back</button>
            <button>front</button>
            <button>ranadom</button>
        </div>
    </section>
  )
}
