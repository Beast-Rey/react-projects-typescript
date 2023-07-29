import { useState } from "react"

interface TourProps {
  tour: {
    id: string;
    name: string;
    info: string;
    price: string;
    image: any;
  },
  removeTour: (id: string) => void
}

export default function Tour({tour: {id, image, name, price, info}, removeTour}: TourProps) {
  const [readMore, setReadMore] = useState<boolean>(false)
  return (
    <section className="bg-[#fff] rounded-[1rem] my-8 mx-0 shadow-md">
      <img className="w-full h-[20rem] object-cover rounded-t-r-[1rem] rounded-t-l-[1rem]" src={image} alt={name} />
      <div className="py-6 px-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="mb-0 text-[1rem] font-bold">{name}</h4>
          <h4 className="mb-0 text-[#49a6e9] bg-[#ebf7ff] py-1 px-[0.5rem] rounded-[1rem]" >${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)} className="text-[#49a6e9] pl-2">
            {readMore ? 'Show less': 'Read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="block w-[200px] mt-4 mx-auto mb-0 text-[#bb2525] bg-transparent border-2 border-[#bb2525]">Not interested</button>
      </div>
    </section>
  )
}
