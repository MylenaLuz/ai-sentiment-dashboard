from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.database import engine, Base, SessionLocal
from backend.routes import router
from backend.fake_data import generate_fictitious_tweets
from backend.crud import populate_database
from backend.analyzer import analyze_tweets_with_ai

# Criar tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Popula o banco de dados com tweets fictícios
db = SessionLocal()
tweets = generate_fictitious_tweets()
populate_database(db, tweets)
db.close()

# Executa a análise da IA nos tweets armazenados
analyze_tweets_with_ai()

# Criar a aplicação FastAPI
app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir as rotas da API
app.include_router(router)

@app.get("/")
def home():
    return {"message": "API rodando com sucesso!"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
