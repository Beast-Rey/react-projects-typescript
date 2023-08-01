import Review from "./components/Review";


export default function App() {
  return (
    <main>
      <section className="w-[80vw] max-w-[620px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our reviews</h2>
          <div className="h-1 w-20 bg-[#49a6e9] mx-auto"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}
