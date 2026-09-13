import { useState, type Dispatch, type SetStateAction } from "react";
import type { ICard } from "../Types/Types";
import { toast } from "react-toastify";


interface prop{
    tek : ICard,
    isSelected : ICard[],
    setIsSelected : Dispatch<SetStateAction<ICard[]>>
}

const Card = ({ tek, isSelected, setIsSelected }: prop) => {

    const [added, setAdded] = useState("Add to Stack");

    const handleClicl = () =>{
         if(!isSelected.includes(tek)){

            toast.success(`${tek.name} is added to the Stack Successfully`)

            setIsSelected([...isSelected, tek]);
            setAdded("✓ Added to Stack")
         }  else{
            
            toast.error(`${tek.name} is already in Stack`)
         }
    }

    return (
        <div className="w-75 h-71.25 rounded-xl p-4 shadow-sm">

            <div className="flex justify-between items-center">
                <img
                    src={tek.logo}
                    alt=""
                    className="h-8.5 w-9"
                />

               <button
  className={`text-xs px-2 py-1 rounded-3xl ${
    tek.badge === "Popular" ? " text-green-600 bg-green-50 "
      : tek.badge === "Versatile" ? "bg-green-50 text-green-600"
      : tek.badge === "Fast" ? "bg-orange-50 text-orange-600"
      : tek.badge === "Standard" ? " text-green-600 bg-green-50"
      : tek.badge === "Top SQL" ? "bg-blue-50 text-blue-600"
      : tek.badge === "Cache" ? "bg-red-50 text-red-600"
      : tek.badge === "Ubiquitous" ? "bg-yellow-50 text-yellow-600"
      : tek.badge === "Essential" ? "bg-blue-50 text-blue-600"
      : tek.badge === "Robust" ? "bg-blue-50 text-blue-600"
      : tek.badge === "Modern" ? "bg-cyan-50 text-cyan-600"
      : tek.badge === "Containers" ? "bg-blue-50 text-blue-600"
      : "bg-gray-50 text-gray-600"
  }`}
>
  {tek.badge}
</button>
            </div>

            <div className="mt-3">
                <h3 className="font-semibold text-lg">
                    {tek.name}
                </h3>
            </div>

            <div className="mt-2">
                <p className="text-[#64748B] text-xs leading-5">
                    {tek.description}
                </p>
            </div>

            <div className="flex gap-3 items-center mt-4">
                <button className="text-xs bg-slate-50 text-[#64748B] px-2 py-1 rounded">
                    {tek.category}
                </button>

                <p className="text-xs text-[#64748B]">
                    {tek.level}
                </p>

                <p className="text-xs ml-12">
                    ⭐ {tek.rating}
                </p>
            </div>

            <div 
            onClick={ handleClicl}
            className="mt-7">
                <button className={`${ isSelected.includes(tek) ? `disabled: shadow-md  w-full h-9 rounded-lg  ` : `bg-[#020817] w-full h-9 rounded-lg text-white text-xs btn` }`}>
                    {added}
                </button>
            </div>

        </div>
    );
};

export default Card;