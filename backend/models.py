from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from backend.database import Base  # Ajustado para refletir a estrutura

class Tweet(Base):
    __tablename__ = "tweets"
    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, index=True)
    sentiment = Column(String)
    score = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    retweet_count = Column(Integer, default=0)
    like_count = Column(Integer, default=0)
    reply_count = Column(Integer, default=0)
    language = Column(String)
    location = Column(String)
