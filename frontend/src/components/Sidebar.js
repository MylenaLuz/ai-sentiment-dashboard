import React from "react";
import { Filter, Smile, Meh, Frown } from "lucide-react";

const Sidebar = ({ setFilter }) => {
  const buttons = [
    { label: "Todos", icon: <Filter size={18} />, color: "text-gray-800" },
    { label: "Positivo", icon: <Smile size={18} />, color: "text-green-600" },
    { label: "Neutro", icon: <Meh size={18} />, color: "text-yellow-500" },
    { label: "Negativo", icon: <Frown size={18} />, color: "text-red-600" },
  ];

  return (
    <div className="bg-purple-800 text-white h-screen w-44 p-6 flex flex-col gap-4 fixed left-0 top-0 shadow-md">
      <h2 className="text-lg font-bold mb-4">Filtros</h2>
      {buttons.map(btn => (
        <button
          key={btn.label}
          onClick={() => setFilter(btn.label)}
          className={`flex items-center gap-2 p-2 rounded hover:bg-purple-700 transition ${btn.color}`}
        >
          {btn.icon}
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
