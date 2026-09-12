import { useState } from "react";
import type { ICard } from "../Types/Types";
import Card from "./Card";
import SelectedTechnology from "./SelectedTechnology";


const TechnologyCards = ({cards} : { cards : ICard[] }) => {

    const [isSelected, setIsSelected] = useState<ICard[]>([]);

    const handleClickRemoveAll = () =>{
         setIsSelected([]);
    }

    

    return (
        <div className="flex my-5 gap-10">
           <div className="grid grid-cols-3 gap-4">
            {
                cards.map( (tek , ind) => <Card isSelected = {isSelected} setIsSelected = {setIsSelected} tek = {tek} key = {ind}></Card> )
            }
            </div>
           <div className="w-95 ml-6 shadow rounded-2xl">
            <div>  <h1 className="mt-5 ml-5 font-semibold text-2xl">Your Stack</h1> </div>
            <p className="font-[#94A3B8] p-5 text-gray-500"> { isSelected.length !== 0 ? `${isSelected.length} Technology Selected` : `No technologies selected yet.`}</p>
             
             {

                isSelected.map( (selected, ind) => <SelectedTechnology selected = {selected} key={ind} isSelected = {isSelected} setIsSelected = {setIsSelected} ></SelectedTechnology> )
            }
            <div className="mt-15">
                {isSelected.length === 0 ? <div className="h-25 w-[90%] m-auto border rounded-2xl border-amber-100  justify-center items-center flex "><p className="text-gray-500">Your stack is empty.</p></div> :  <button onClick={handleClickRemoveAll} className="h-14 w-[95%] m-auto border border-red-300 rounded-lg flex items-center px-3 justify-center text-red-700 font-semibold  btn">Remove All</button>}
            </div>
           </div>
        </div>
    );
};

export default TechnologyCards;