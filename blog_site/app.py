from flask import Flask, render_template, json, url_for
import requests

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/blog")
def blog():
    with open("./blog_data.json", "r") as file:
        blog_data = json.load(file)
    return render_template("blog.html", posts=blog_data)

@app.route("/blog/<id>")
def get_blog(id):
    with open("./blog_data.json", "r") as file:
        blog_data = json.load(file)
    return render_template("blog.html", posts=blog_data)

if (__name__ == "__main__"):
    app.run(debug=True)