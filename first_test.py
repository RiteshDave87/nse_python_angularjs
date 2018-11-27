from flask import Flask, render_template
from nsetools import Nse
import os
app = Flask(__name__)
nse = Nse()
port = int(os.getenv('PORT', 64781))

@app.route('/getquote/<name>')
def getQuote(name):
    quote = nse.get_quote(name, as_json=True)
    return quote

@app.route('/topgainers')
def fetchTopGainers():
    top_gainers = nse.get_top_gainers(as_json=True)
    return top_gainers

@app.route('/toplosers')
def fetchTopLosers():
    top_losers = nse.get_top_losers(as_json=True)
    return top_losers

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)