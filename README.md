# 🧠 AI Sentiment Dashboard

Dashboard de análise de sentimento: o backend em Python classifica textos (tweets) como **Negativo**, **Neutro** ou **Positivo** usando um modelo de linguagem, e o frontend em React exibe os resultados em gráficos e mapa.

## ✨ Funcionalidades

- Classificação de sentimento com o modelo `nlptown/bert-base-multilingual-uncased-sentiment` (Transformers), que gera notas de 1 a 5 estrelas convertidas em Negativo, Neutro ou Positivo
- API REST com FastAPI e persistência com SQLAlchemy
- Gerador de tweets fictícios para testar o dashboard sem depender de dados reais
- Visualização com Chart.js e Leaflet (gráficos e mapa)

## 🛠️ Stack

**Backend:** Python · FastAPI · SQLAlchemy · Transformers · Tweepy · Redis · Uvicorn
**Frontend:** React 19 · Chart.js · React Leaflet · Axios

## 📁 Estrutura

- `backend/` – API, modelos, banco de dados e análise de sentimento
- `frontend/` – aplicação React (Create React App)
- `requirements.txt` – dependências do backend

## ▶️ Rodando localmente

**Backend** (a partir da raiz do repositório):

```bash
pip install -r requirements.txt
uvicorn backend.main:app --reload
```

**Frontend:**

```bash
cd frontend
npm install
npm start
```

## 📫 Contato

[LinkedIn](https://www.linkedin.com/in/mylena-luz-733017176) · [E-mail](mailto:mylenadaluzalves@gmail.com)
