from urllib.parse import urlparse
from fastapi import FastAPI, HTTPException
from server.schemas import AnalyzeRequest
from server.services import crawl_article, extract_keywords

app = FastAPI()


@app.get("/health")
async def health_check():
    return {"health": "ok"}


@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    if urlparse(request.url).scheme not in ("https", "http"):
        raise HTTPException(status_code=400, detail="Invalid URL")

    article = await crawl_article(request.url)
    if article is None:
        raise HTTPException(
            status_code=422,
            detail="Could not extract article content from URL; page could not be processed.",
        )
    keywords = await extract_keywords(article)

    return {"keywords": keywords}
