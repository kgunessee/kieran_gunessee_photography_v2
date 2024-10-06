//This component displays the equipment based on the object category. It's looped through on the equipment page.jsx.

//Hooks & Plugins
import Image from "next/image";

export function EquipmentCategory({ content, header }) {
  const convertObjectToArray = (objectList) => {
    return Object.values(objectList);
  };

  return (
    <>
      <h3 className={`text-headerText my-2 font-semibold`}>{header}</h3>
      <ul className={`grid grid-cols-3 gap-2 sm:flex sm:flex-wrap`}>
        {convertObjectToArray(content).map((item, index) => {
          return (
            <li
              className={`text-contentText relative flex w-[200px] flex-col gap-1 text-center text-xs`}
              key={`scope${index}`}
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
                sizes="(max-width: 400px) 200px, (max-width: 401px) 400px"
                style={{ borderRadius: "0.25rem" }}
              />
              <p className={`w-full text-wrap`}>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
