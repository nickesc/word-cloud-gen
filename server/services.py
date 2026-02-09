from trafilatura import fetch_url, extract
from rake_nltk import Rake
from server.schemas import Keyword

import nltk

nltk.download("stopwords")
nltk.download("punkt_tab")


async def crawl_article(url: str) -> str | None:
    article = fetch_url(url)
    return extract(article) if article else None


async def extract_keywords(text: str) -> list[Keyword]:
    rake = Rake()
    if not text.strip():
        return []
    rake.extract_keywords_from_text(text)
    ranked_phrases = rake.get_ranked_phrases_with_scores()
    return [Keyword(score=score, keyword=phrase) for score, phrase in ranked_phrases]


async def get_article_examples() -> list[str]:
    return [
        "https://www.nbcnews.com/health/aging/brain-training-game-protect-dementia-research-decades-alzheimers-rcna257790",
        "https://www.npr.org/2026/01/23/nx-s1-5678936/oscar-nominated-movies-how-to-watch",
        "https://www.propublica.org/article/faa-safety-warning-spacex-starship-explosions-airlines",
        "https://apnews.com/article/womens-downhill-olympics-breezy-johnson-vonn-cdbc3193ae07b13a3b6f9ca37bae3482",
    ]
