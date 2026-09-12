import type { ICard } from "../Types/Types";

const Card = ({ tek }: { tek: ICard }) => {
    return (
        <div className="w-75 h-71.25 rounded-xl p-4 shadow-sm">

            <div className="flex justify-between items-center">
                <img
                    src={tek.logo}
                    alt=""
                    className="h-8.5 w-9"
                />

                <button className="text-xs px-2 py-1 rounded-3xl bg-green-50 text-green-600">
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

                <p className="text-xs">
                    ⭐ {tek.rating}
                </p>
            </div>

            <div className="mt-7">
                <button className="bg-[#020817] w-full h-9 rounded-lg text-white text-xs btn">
                    Add to Stack
                </button>
            </div>

        </div>
    );
};

export default Card;