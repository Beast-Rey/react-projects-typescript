import List from "./components/List";
import { PersonType, Persons } from "./lib/data";
import { useState } from "react";

export default function App() {
  const [persons, setPersons] = useState<PersonType[]>(Persons);

  return (
    <main className="flex justify-center items-center min-h-full">
      <section className="w-[90%] my-20 max-w-[450px] rounded-[0.25rem] py-6 px-8 bg-[#fff]">
        <h3 className="font-normal text-[2rem] decoration-none mb-8">
          Birthday's today
        </h3>
        <List persons={persons} setPersons={setPersons} />
        <button
          onClick={() => setPersons([])}
          className="w-full block cursor-pointer outline-1 py-[0.5rem] px-0 text-[1.2rem] capitalize mt-8 text-[#fff] outline-[#f28ab2] mx-auto rounded-[2.5rem] tracking-wider bg-[#f28ab2] border-transparent"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}
