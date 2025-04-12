import React from "react";

const InsightsPanel = ({ tweets }) => {
  const total = tweets.length;
  const positivos = tweets.filter(t => t.sentiment === "Positivo").length;
  const negativos = tweets.filter(t => t.sentiment === "Negativo").length;
  const neutros = total - positivos - negativos;

  const percent = (value) => total ? ((value / total) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Insights Gerais</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-800">{total}</p>
        </div>
        <div>
          <p className="text-sm text-green-600">😀 Positivos</p>
          <p className="text-xl font-bold">{positivos} ({percent(positivos)}%)</p>
        </div>
        <div>
          <p className="text-sm text-yellow-500">😐 Neutros</p>
          <p className="text-xl font-bold">{neutros} ({percent(neutros)}%)</p>
        </div>
        <div>
          <p className="text-sm text-red-500">😡 Negativos</p>
          <p className="text-xl font-bold">{negativos} ({percent(negativos)}%)</p>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
