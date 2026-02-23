python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt

npm install
npm run build

export PORT=8127
export DEV=true

uvicorn server.main:app --port $PORT --reload
