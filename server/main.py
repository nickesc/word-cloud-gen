from urllib.parse import urlparse
from fastapi import FastAPI, HTTPException
from server.schemas import AnalyzeRequest, AnalyzeResponse, ArticleExamplesResponse
from server.services import crawl_article, extract_keywords, get_article_examples

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
)


@app.get("/health")
async def health_check():
    return {"health": "ok"}


@app.post("/analyze", response_model=AnalyzeResponse)
async def analyze(request: AnalyzeRequest):
    if urlparse(request.url).scheme not in ("https", "http"):
        raise HTTPException(status_code=400, detail="Invalid URL")

    article = await crawl_article(request.url)
    if article is None:
        raise HTTPException(
            status_code=422,
            detail="Could not extract article content from URL.",
        )

    keywords = await extract_keywords(article)
    return AnalyzeResponse(keywords=keywords)


@app.get("/articles", response_model=ArticleExamplesResponse)
async def get_examples():
    return ArticleExamplesResponse(articles=await get_article_examples())
