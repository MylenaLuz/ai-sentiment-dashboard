import React from "react";

const SearchBar = ({ text, setText, count, setCount, analyzeSentiment }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full">
      <input
        type="text"
        placeholder="Digite um tema..."
        className="w-full sm:w-1/2 border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qtd"
        className="w-24 border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        min="1"
        max="100"
      />
      <button
        onClick={analyzeSentiment}
        className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition"
      >
        Analisar
      </button>
    </div>
  );
};

export default SearchBar;
