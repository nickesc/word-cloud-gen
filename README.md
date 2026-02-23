# Article Word Cloud Generator

###### By Nick Escobar [GitHub](https://github.com/nickesc) | [Website](https://nickesc.github.io)

A small interactive website that visualizes topics from a news article as a 3D word cloud.

## Dependencies

**Backend:**

- `fastapi`
- `uvicorn[standard]`
- `trafilatura`
- `rake-nltk`
- `nltk`

**Frontend:**

- `react`
- `three`
- `@react-three/fiber`
- `@react-three/drei`


## How It Works

Paste a news article URL (or pick from the sample dropdown) and hit **Analyze**. The backend scrapes the article text, runs keyword extraction, and returns scored keywords. The frontend renders them as an interactive 3D word cloud where each word's size reflects its relevance score.

Rotate, pan, and zoom the word cloud with the mouse. Word positions are pseudo-randomly seeded from each keyword and its score, so the same article always produces the same layout.

## API

#### `POST /analyze`

Accepts a URL and returns extracted keywords with relevance scores.

```jsonc
// Request
{ "url": "https://example.com/article" }

// Response
{ "keywords": [{ "keyword": "...", "score": 12.5 }, ...] }
```

#### `GET /articles`

Returns a list of sample article URLs.

```jsonc
// Response
{ "articles": ["https://...", ...] }
```

## Running the Project

From the project root:

```bash
./start.sh
```

This creates a virtual environment, installs all dependencies, builds the frontend, and starts the server at `http://localhost:8127`.

## Notes

I had a lot of fun building this project, and I really enjoyed learning the libraries. This was the first time I had used any version of `three.js`, and while I found it challenging at first, as I got more comfortable with what I was doing I found that it was actually very interesting to work with.

There is a lot more that I feel I could do in terms of polish, but for a project made in a couple hours I am happy to leave it here. With more time, I would have liked to:

- Retrieve sample articles dynamically instead of hardcoding them
- Tune the NLTK tokenizer for better keyword quality
- Add a 3D compass to help orient the user
- Build more robust loading/error states for API calls
- Spend more time styling the word cloud to make each keyword stand out more
- Continue to polish the overall UI/UX
