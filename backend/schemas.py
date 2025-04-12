from pydantic import BaseModel
from datetime import datetime

class AnalyzeTweetsRequest(BaseModel):
    query: str
    count: int = 10

class TweetResponse(BaseModel):
    text: str
    sentiment: str
    score: float
    created_at: datetime
    retweet_count: int
    like_count: int
    reply_count: int
    language: str
    location: str
