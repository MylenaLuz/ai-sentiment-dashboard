import React, { useState, useEffect } from "react";
import axios from "axios";
import SentimentChart from "./components/SentimentChart";
// import SentimentMap from "./components/SentimentMap";
import InsightsPanel from "./components/InsightsPanel";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import './index.css'; // ou './styles.css' se estiver usando esse


function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(10);
  const [tweets, setTweets] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const fetchTweets = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/tweets");
      setTweets(response.data);
    } catch (error) {
      console.error("Erro ao buscar tweets:", error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const analyzeSentiment = async () => {
    await axios.post("http://127.0.0.1:8000/analyze-tweets", { query: text, count });
    fetchTweets();
  };

  const filteredTweets = filter === "Todos" ? tweets : tweets.filter(t => t.sentiment === filter);

  return (
    <div className="dashboard">
      <Sidebar setFilter={setFilter} />
      <div className="main-content">
        <h1>📊 Análise de Sentimento</h1>
        <SearchBar text={text} setText={setText} count={count} setCount={setCount} analyzeSentiment={analyzeSentiment} />
        <InsightsPanel tweets={filteredTweets} />
        <SentimentChart data={filteredTweets} />
{/* <SentimentMap tweets={filteredTweets} /> */}
</div>
    </div>
  );
}

export default App;
