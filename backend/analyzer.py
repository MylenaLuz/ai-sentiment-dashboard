from transformers import pipeline
from backend.models import Tweet
from backend.database import SessionLocal

# Configuração do novo modelo de análise de sentimentos
PRIMARY_MODEL = "nlptown/bert-base-multilingual-uncased-sentiment"
primary_pipeline = pipeline("sentiment-analysis", model=PRIMARY_MODEL)

# Mapeamento de sentimentos com base no novo modelo (estrelas de 1 a 5)
SENTIMENT_MAP = {
    "1 star": "Negativo",
    "2 stars": "Negativo",
    "3 stars": "Neutro",
    "4 stars": "Positivo",
    "5 stars": "Positivo"
}

def classify_sentiment(label):
    """
    Converte o label do modelo de estrelas para Negativo, Neutro ou Positivo.
    """
    return SENTIMENT_MAP.get(label, "Neutro")  # Garante que sempre retorna algo válido

# Função para reanalisar os tweets usando a IA
def analyze_tweets_with_ai():
    db = SessionLocal()
    tweets = db.query(Tweet).all()

    if not tweets:
        print("🚨 Nenhum tweet encontrado no banco para análise!")
        db.close()
        return

    print(f"📊 Analisando {len(tweets)} tweets com IA...")

    for tweet in tweets:
        analysis = primary_pipeline(tweet.text)[0]  # IA analisa o texto do tweet
        label = analysis["label"]  # Agora retorna "5 stars", "3 stars", etc.
        score = round(analysis["score"], 2)  # Mantemos o score normal

        new_sentiment = classify_sentiment(label)  # Converte para Negativo, Neutro ou Positivo

        print(f"🔍 Tweet: {tweet.text} | Antes: {tweet.sentiment} → Depois: {new_sentiment} ({score})")

        tweet.sentiment = new_sentiment
        tweet.score = score
        db.add(tweet)  # Adiciona ao banco para commit futuro

    db.commit()
    db.close()
    print("✅ Análise concluída e dados atualizados no banco!")
