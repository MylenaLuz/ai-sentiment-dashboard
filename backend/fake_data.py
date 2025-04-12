import random
from datetime import datetime, timedelta
from backend.models import Tweet

def generate_fictitious_tweets():
    texts = [
        "A nova tecnologia da Samsung está incrível!",
        "O atendimento ao cliente precisa melhorar.",
        "Os produtos da Samsung são bons, mas caros.",
        "Inovação forte da Samsung este ano.",
        "Samsung liderando o mercado de eletrônicos.",
        "Comprei um novo Galaxy e estou amando!",
        "Bateria dura mais do que eu esperava!",
        "Samsung sempre inovando no design!",
        "Meu celular Samsung travou após a última atualização.",
        "O suporte técnico da Samsung resolveu meu problema rapidamente."
    ]
    
    tweets = []
    for text in texts:
        tweets.append(Tweet(
            text=text,
            sentiment=random.choice(["Positivo", "Neutro", "Negativo"]),
            score=round(random.uniform(0.1, 1.0), 2),
            created_at=datetime.utcnow() - timedelta(days=random.randint(0, 30)),
            retweet_count=random.randint(0, 100),
            like_count=random.randint(0, 500),
            reply_count=random.randint(0, 50),
            language="pt",
            location=random.choice(["São Paulo", "Rio de Janeiro", "Brasília"])
        ))
    return tweets
