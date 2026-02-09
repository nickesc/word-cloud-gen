from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    url: str = Field(..., description="The URL of the article to analyze")

class Keyword(BaseModel):
    score: float = Field(..., description="Relevance score for the keyword/phrase")
    keyword: str = Field(..., description="Keyword or key phrase extracted from the article")


class AnalyzeResponse(BaseModel):
    keywords: list[Keyword] = Field(
        ..., description="Keywords extracted from the article"
    )


class ArticleExamplesResponse(BaseModel):
    articles: list[str] = Field(
        ..., description="A list of article URLs to use as examples"
    )
