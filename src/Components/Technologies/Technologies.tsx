import { use } from "react";
import type { ICard } from "../Types/Types";
import TechnologyCards from "./TechnologyCards";


interface CardsProps{
    CardsPromise : Promise<ICard[]>
}

const Technologies = ({CardsPromise} : CardsProps) => {

const cards = use(CardsPromise);
    return (
        <div className="h-336.25 w-[90%] m-auto">

            <div className="h-25">
                <h1 className="font-bold text-3xl my-2">Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent font-bold text-3xl">Technologies</span></h1>
                <p className="text-[#64748B] my-2">Pick technology per category to build your ideal stack</p>
            </div>

            {/* Technology Card section */}
            <TechnologyCards cards = {cards} ></TechnologyCards>
        </div>
    );
};

export default Technologies;