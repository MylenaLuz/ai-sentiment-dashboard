from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import AnalyzeTweetsRequest, TweetResponse
from crud import get_tweets
from database import get_db

router = APIRouter()  # Sem prefixo!

@router.post("/analyze-tweets", response_model=list[TweetResponse])
def analyze_tweets(request: AnalyzeTweetsRequest, db: Session = Depends(get_db)):
    """
    Retorna tweets do banco de dados que já passaram pela análise de sentimentos.
    """
    tweets = get_tweets(db, request.query, request.count)
    
    if not tweets:
        raise HTTPException(status_code=404, detail="Nenhum tweet encontrado.")

    return [
        {
            "text": tweet.text,
            "sentiment": tweet.sentiment,  # Já processado pela IA
            "score": tweet.score,  # Já processado pela IA
            "created_at": tweet.created_at.isoformat(),
            "retweet_count": tweet.retweet_count,
            "like_count": tweet.like_count,
            "reply_count": tweet.reply_count,
            "language": tweet.language,
            "location": tweet.location,
        }
        for tweet in tweets
    ]
