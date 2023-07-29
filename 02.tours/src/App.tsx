import { useEffect, useState } from "react"
import Tours from "./components/Tours"
import Loading from "./components/Loading"
import { TourType } from "./types"

const url = import.meta.env.VITE_API_URL

export default function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [tours, setTours] = useState<TourType[]>([])

  const removeTour = (id:string) => {
    const newTours  = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <section>
          <h2 className="text-center mb-16 text-[2.5rem] font-bold">No tours left</h2>
          <button className="w-full block cursor-pointer outline-1 py-[0.5rem] px-0 text-[1.2rem] capitalize mt-8 text-[#fff] outline-[#f28ab2] mx-auto rounded-[2.5rem] tracking-wider bg-[#3a3033] border-transparent" onClick={() => fetchTours()}>Refresh</button>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}
