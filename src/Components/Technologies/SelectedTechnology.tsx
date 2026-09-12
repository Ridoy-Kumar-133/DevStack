import type { ICard } from "../Types/Types";

const SelectedTechnology = ({ selected }: { selected: ICard }) => {
  return (
    <div className="mb-3">
      <div className="h-14 w-full border border-slate-200 rounded-lg flex items-center px-3">

        <img
          src={selected.logo}
          alt={selected.name}
          className="w-8 h-8 object-contain"
        />

        <div className="ml-3 flex-1">
          <p className="text-sm font-semibold">
            {selected.name}
          </p>

          <p className="text-[9px] text-slate-400">
             {selected.category}
          </p>
        </div>

        <button className="text-xl text-slate-400">
          ×
        </button>

      </div>
    </div>
  );
};

export default SelectedTechnology;