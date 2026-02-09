from trafilatura import fetch_url, extract
from rake_nltk import Rake

import nltk

nltk.download("stopwords")
nltk.download("punkt_tab")


async def crawl_article(url: str) -> str:
    return extract(fetch_url(url))


async def extract_keywords(text: str) -> list[str]:
    rake = Rake()
    rake.extract_keywords_from_text(text)
    return rake.get_ranked_phrases_with_scores()
