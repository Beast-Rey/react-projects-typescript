import { AiFillDelete } from "react-icons/ai";
import { PersonType } from "../lib/data";

interface ListProps {
  setPersons: React.Dispatch<React.SetStateAction<PersonType[]>>;
  persons: {
    id: number;
    name: string;
    age: number;
    image: string;
  }[];
}

export default function List({ persons, setPersons }: ListProps) {
  const handleDelete = (id: number) => {
    const filteredData = persons.filter((x) => x.id !== id);
    setPersons(filteredData);
  };

  return (
    <>
      {persons?.map((person: PersonType) => (
        <section className="flex gap-10 mb-5 items-center" key={person.id}>
          <img
            className="w-[75px] h-[75px] object-cover rounded-full"
            src={person.image}
            alt={person.name}
          />
          <div className="flex-1">
            <h4 className="font-bold tracking-widest text-[0.875rem] mb-[0.35rem">
              {person.name}
            </h4>
            <p className="mb-0 font-medium tracking-wider text-gray-400">
              {person.age} Years
            </p>
          </div>
          <div>
            <button onClick={() => handleDelete(person.id)}>
              <AiFillDelete size={25} />
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
