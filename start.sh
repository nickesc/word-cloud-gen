python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt

npm install --prefix app

# start backend
mkdir -p logs
uvicorn server.main:app --port 8127 --reload >logs/backend.log 2>&1 &

# start frontend
npm run dev --prefix app


