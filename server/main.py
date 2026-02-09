from fastapi import FastAPI
from server.schemas import AnalyzeRequest

app = FastAPI()


@app.get("/health")
async def health_check():
    return {"health": "ok"}


@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    return {"analyze": request.url}
