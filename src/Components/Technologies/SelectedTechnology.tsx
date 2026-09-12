import type { Dispatch, SetStateAction } from "react";
import type { ICard } from "../Types/Types";

interface pop{
   selected: ICard,
   isSelected : ICard[],
     setIsSelected: Dispatch<SetStateAction<ICard[]>>;

}

const SelectedTechnology = ({ selected ,isSelected, setIsSelected  }: pop) => {


  const xbuttonClicked = () =>{
        setIsSelected(
          isSelected.filter( item => item.id !== selected.id )
        )
  }

  return (
    <div className="mb-0 p-3">
      <div className="h-14 w-full border border-slate-200 rounded-lg flex items-center px-3">

        <img
          src={selected.logo} alt={selected.name} className="w-8 h-8 object-contain"/>

        <div className="ml-3 flex-1">
          <p className="text-sm font-semibold">
            {selected.name}
          </p>

          <p className="text-[9px] text-slate-400">
             {selected.category}
          </p>
        </div>

        <button 
        onClick={xbuttonClicked}
        className="text-xl text-slate-400"> × </button>

      </div>
    </div>
  );
};

export default SelectedTechnology;