import { ImQuotesLeft } from "react-icons/im";
import { AiFillFastForward, AiFillFastBackward } from "react-icons/ai";
import people, { IReviews } from '../data'

import { useState } from 'react'


export default function Review() {
  const [index, setIndex] = useState<number>(0)
  const { name, job, image, text } = people[index] as IReviews

  const previousButton = () => {
    setIndex(index === 0 ? 0 : index - 1)
  }

  const nextButton = () => {
    setIndex(index === people.length - 1 ? 0 : index + 1)
  }


  return (
    <section className='bg-[#fff] rounded-[0.25rem] ease-linear duration-300 text-center py-6 px-8'>
      <div className='relative w-[150px] h-[150px] rounded-[50%] my-0 mx-auto mb-6 before:w-full before:h-full before:absolute before:top-[-0.25rem] before:right-[-0.25rem] before:rounded-[50%] before:bg-[#49a6e9]'>
        <img src={image} alt={name} className='w-full block h-full object-cover rounded-[50%] relative' />
        <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-[50%] traslate-y-[25%] bg-[#49a6e9] text-[#fff]'><ImQuotesLeft size={20} className="text-[#fff]" /></span>
      </div>
      <h4 className='mb-[0.25rem] text-xl capitalize font-bold'>{name}</h4>
      <p className="mb-2 uppercase text-[#49a6e9] text-[0.85rem] tracking-wider">{job}</p>
      <p className="mb-3">{text}</p>
      <div className="flex justify-center gap-5">
        <button onClick={previousButton}>
          <AiFillFastBackward size={30} className="text-[#49a6e9]" />
        </button>
        <button onClick={nextButton}>
          <AiFillFastForward size={30} className="text-[#49a6e9]" />
        </button>
      </div>
      <button className='mt-1 bg-[#f1f5f8] text-[#49a6e9] py-2 px-1 pointer rounded-[0.25rem] ease-linear border-transparent capitalize hover:bg-[#49a6e9] hover:text-[#063251]'>Suprise Me</button>
    </section>
  )
}
