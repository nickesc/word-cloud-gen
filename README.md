# Article Word Cloud Generator

###### By Nick Escobar [GitHub](https://github.com/nickesc) | [Website](https://nickesc.github.io)

A small interactive website that visualizes topics from a news article as a 3D word cloud.

## Overview

Backend:

- Built in `Python` with `FastAPI` -- uses `trafilatura` to extract article text and `rake-nltk` to extract keywords.
- `POST /analyze`: send with a JSON body containing a `url` field, returns a JSON response with a `keywords` field containing an array of objects with `score` and `keyword` fields.
- `GET /articles`: returns a JSON response with an `articles` field containing an array of strings, each with a URL of a sample article.

Frontend:

- Built with `React`, uses `React Three Fiber` to render an interactiven3D word cloud.
- Includes a text input for the user to enter a URL of an article to analyze
- Also provides a dropdown menu with a few sample article URLs to choose from (pulled from the `GET /articles` endpoint)
- Sends a `POST` request to the `POST /analyze` endpoint when the user clicks the "Analyze" button, and displays the results from the response in a 3D word cloud.
- The created word cloud is interactive, with the ability to rotate, pan, and zoom using the mouse.
- Word clouds are generated using a pseudo-random method to position the words in the 3D space based on a seed created from the keyword and its score; the size of each word is determined by its score.

Built as a part of a take-home assessment for a Full Stack position.

## Dependencies

Python packages used:

- `fastapi`
- `uvicorn[standard]`
- `trafilatura`
- `rake-nltk`
- `nltk`

Frontend packages used:

- `react`
- `react-three-fiber`

## Running the project

From the root of the project, run:

```bash
./start.sh
```

This will start the backend and frontend servers. The frontend will be available at `http://localhost:5173`, and the backend will be available at `http://localhost:8127`. Frontend server logs will be written to `logs/frontend.log`, while backend logs will be displayed in the terminal.

## Notes

I had a lot of fun building this project, and I really enjoyed learning the libraries. This was the first time I had used any version of `three.js`, and while I found it challenging at first, as I got more comfortable with what I was doing I found that it was actually very interesting to work with.

There is a lot more that I feel I could do in terms of polish, but for a project made in a couple hours I am happy to leave it here. If I'd had more time, I would have liked to:

- Add a method to retrieve a list of sample articles instead of hardcoding them
- Spent more time looking into the tokenizer in `nltk` to improve the quality of the keywords extracted
- Added a 3D compass to the visualization to help orient the user
- A more robust loading/error handling system for API calls to the backend
- Spend more time styling the word cloud to make each keyword stand out more
- Continue to polish the UI/UX of the project
