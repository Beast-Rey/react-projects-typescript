import { TourType } from "../types";
import Tour from "./Tour";

interface ITourProps {
  tours: {
    id: string;
    name: string;
    info: string;
    price: string;
    image: any;
    
  }[]
  removeTour: (id: string) => void
}

export default function Tours({tours, removeTour}: ITourProps) {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="mb-3 tracking-[0.1rem] capitalize text-[2.5rem]">Our Tours</h2>
        <div className="w-24 h-1 ml-auto mr-auto bg-[#49a6e9]"></div>
      </div>
      <div>
        {tours.map((tour:TourType) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
        ))}
      </div>
    </section>
  )
}
