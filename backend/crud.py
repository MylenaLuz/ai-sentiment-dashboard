from sqlalchemy.orm import Session
from backend.models import Tweet  # Ajustado para refletir a estrutura

def get_tweets(db: Session, query: str, count: int):
    return db.query(Tweet).filter(Tweet.text.ilike(f"%{query}%")).limit(count).all()

def populate_database(db: Session, tweets):
    if db.query(Tweet).count() == 0:
        db.bulk_save_objects(tweets)
        db.commit()
