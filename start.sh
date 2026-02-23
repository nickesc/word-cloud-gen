python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt

npm install
npm run build

uvicorn server.main:app --port 8127
