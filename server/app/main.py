from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"MESSAGE": "WELCOME TO SOSHA SOUTH FC SERVER"}