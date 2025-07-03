import { data } from "../data.js";

function ClasesExtra(i) {
  let clases = "";

  if (i === 1 || i === 3 || i === 5) clases += " mt-10";
  if (i === 1 || i === 4) clases += " md:mt-10";

  return clases;
}

export default function Card() {
  return (
    <div className="contenedor grid grid-cols-2 md:grid-cols-3 gap-10 md: gap-10 mt-15">
      {data.map((person, i) => (
        <div
          key={person.id}
          className={`flex flex-row h-[40vh] w-[45vw] md:w-[30vw] items-center${ClasesExtra(
            i
          )}`}
        >
          <div className="flex flex-col flex-1 items-center mr-[2px]">
            <img className="" src={person.photo} alt={person.name} />
            <h3 className="font-bold mt-2 text-center">{person.name}</h3>
          </div>
          <p className="self-start rotate-90 whitespace-nowrap text-gray-700 text-sm ml-[2px]">
            {person.role}
          </p>
        </div>
      ))}
    </div>
  );
}
