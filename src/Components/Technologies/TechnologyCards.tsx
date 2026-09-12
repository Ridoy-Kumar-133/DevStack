import { useState } from "react";
import type { ICard } from "../Types/Types";
import Card from "./Card";
import SelectedTechnology from "./SelectedTechnology";


const TechnologyCards = ({cards} : { cards : ICard[] }) => {

    const [isSelected, setIsSelected] = useState<ICard[]>([]);

    console.log(isSelected);

    return (
        <div className="flex my-5 gap-10">
           <div className="grid grid-cols-3 gap-4">
            {
                cards.map( (tek , ind) => <Card isSelected = {isSelected} setIsSelected = {setIsSelected} tek = {tek} key = {ind}></Card> )
            }
            </div>
           <div className="w-87.5 ml-6">
             {
                isSelected.map( (selected, ind) => <SelectedTechnology selected = {selected} key={ind} ></SelectedTechnology> )
            }
           </div>
        </div>
    );
};

export default TechnologyCards;