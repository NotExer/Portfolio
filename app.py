from flask import Flask, request, render_template, redirect, url_for
import smtplib
from email.mime.text import MIMEText
import os

app = Flask(__name__)


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USER = "samurpo20@gmail.com"
EMAIL_PASS = "redt cekb nljy vwbz"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send", methods=["POST"])
def send_message():
    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    body = f"Nombre: {name}\nEmail: {email}\n\nMensaje:\n{message}"
    msg = MIMEText(body)
    msg["Subject"] = "Nuevo mensaje desde el formulario"
    msg["From"] = EMAIL_USER
    msg["To"] = EMAIL_USER

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, EMAIL_USER, msg.as_string())
        return redirect(url_for("index"))
    except Exception as e:
        return f"Error al enviar el mensaje: {e}"

if __name__ == "__main__":
    app.run(debug=True)