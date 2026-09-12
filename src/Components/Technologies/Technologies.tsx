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

            <div>
                <h1 className="font-bold text-3xl">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#df75d4] bg-clip-text text-transparent font-bold text-3xl">Technologies</span></h1>
                <p className="text-[#64748B]">Pick technology per category to build your ideal stack</p>
            </div>

            {/* Technology Card section */}
            <TechnologyCards cards = {cards} ></TechnologyCards>
        </div>
    );
};

export default Technologies;