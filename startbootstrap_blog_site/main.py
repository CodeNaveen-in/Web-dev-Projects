from flask import Flask, render_template, url_for
import requests
import json

app = Flask(__name__)
blog_api = "https://api.npoint.io/307e0da3db2a31f2349b"
response = requests.get(blog_api)
blog_data = response.json()
@app.route("/")
def hello():
    return render_template("index.html", blog_data= blog_data)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/post")
def post():
    return render_template("post.html")

@app.route("/post/<id>")
def get_post(id):
    requested_post = None
    for blog in blog_data:
        if (blog["id"]==int(id)):
            requested_post=blog
    return render_template('post.html', post=requested_post)

if (__name__ == "__main__"):
    app.run(debug=True)