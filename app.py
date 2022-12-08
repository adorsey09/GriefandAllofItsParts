
from flask import Flask, render_template
from flask_session import Session


# Configure application
app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

#routes for different html files
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/Scene_1")
def scene_1():
    return render_template("scene_1.html")

@app.route("/Scene_2")
def scene_2():
    return render_template("scene_2.html")

@app.route("/Scene_3")
def scene_3():
    return render_template("scene_3.html")

@app.route("/Scene_4")
def scene_4():
    return render_template("scene_4.html")

@app.route("/Scene_5")
def scene_5():
    return render_template("scene_5.html")

@app.route("/Scene_8")
def scene_8():
    return render_template("scene_8.html")

@app.route("/Scene_9")
def scene_9():
    return render_template("scene_9.html")

@app.route("/Scene_11")
def scene_11():
    return render_template("scene_11.html")

@app.route("/Scene_12")
def scene_12():
    return render_template("scene_12.html")

@app.route("/Scene_13")
def scene_13():
    return render_template("scene_13.html")

@app.route("/Scene_14")
def scene_14():
    return render_template("scene_14.html")

@app.route("/Scene_16")
def scene_16():
    return render_template("scene_16.html")

@app.route("/Scene_17")
def scene_17():
    return render_template("scene_17.html")

@app.route("/Scene_18")
def scene_18():
    return render_template("scene_18.html")

@app.route("/Scene_19")
def scene_19():
    return render_template("scene_19.html")

@app.route("/Scene_20")
def scene_20():
    return render_template("scene_20.html")

@app.route("/Scene_21")
def scene_21():
    return render_template("scene_21.html")

@app.route("/Scene_22")
def scene_22():
    return render_template("scene_22.html")

@app.route("/Scene_23")
def scene_23():
    return render_template("scene_23.html")

@app.route("/Scene_24")
def scene_24():
    return render_template("scene_24.html")

@app.route("/Scene_25")
def scene_25():
    return render_template("scene_25.html")

@app.route("/Scene_26")
def scene_26():
    return render_template("scene_26.html")

@app.route("/Scene_27")
def scene_27():
    return render_template("scene_27.html")

@app.route("/Scene_28")
def scene_28():
    return render_template("scene_28.html")

@app.route("/Scene_30")
def scene_30():
    return render_template("scene_30.html")

@app.route("/Scene_31")
def scene_31():
    return render_template("scene_31.html")


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/help")
def help():
    return render_template("help.html")


