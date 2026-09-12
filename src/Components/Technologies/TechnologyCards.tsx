import type { ICard } from "../Types/Types";
import Card from "./Card";
import SelectedTechnology from "./SelectedTechnology";


const TechnologyCards = ({cards} : { cards : ICard[] }) => {

    console.log(cards);

    return (
        <div className="flex my-5">
           <div className="grid grid-cols-3 gap-1">
            {
                cards.map( (tek) => <Card tek = {tek}></Card> )
            }
            </div>
            <SelectedTechnology></SelectedTechnology>
        </div>
    );
};

export default TechnologyCards;