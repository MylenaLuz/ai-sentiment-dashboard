import React, { useState, useEffect } from "react";
import axios from "axios";
import SentimentChart from "./SentimentChart";

function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(10);
  const [result, setResult] = useState(null);
  const [tweets, setTweets] = useState([]); // Estado para armazenar os tweets do banco de dados

  // Função para buscar tweets do banco de dados
  const fetchTweets = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/tweets");
      setTweets(response.data); // Atualiza o estado com os tweets
    } catch (error) {
      console.error("Erro ao buscar tweets:", error);
    }
  };

  // Busca os tweets ao carregar o componente
  useEffect(() => {
    fetchTweets();
  }, []);

  const analyzeSentiment = async () => {
    const response = await axios.post("http://127.0.0.1:8000/analyze-tweets", {
      query: text,
      count: count,
    });
    setResult(response.data);
    fetchTweets(); // Atualiza a lista de tweets após a análise
  };

  return (
    <div className="container">
      <h1 className="title">Análise de Sentimento</h1>
      <h3>Digite um tema abaixo para gerar a análise de sentimento no X</h3>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite um tema..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade de tweets"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          max="100"
        />
        <button onClick={analyzeSentiment}>Analisar</button>
      </div>
      {result && (
        <div className="result-box">
          <h2>Resultados da Análise:</h2>
          <SentimentChart data={result} />
        </div>
      )}
      <div className="result-box">
        <h2>Tweets Armazenados no Banco de Dados:</h2>
        <SentimentChart data={tweets} /> {/* Exibe os tweets do banco de dados */}
      </div>
    </div>
  );
}

export default SentimentAnalyzer;