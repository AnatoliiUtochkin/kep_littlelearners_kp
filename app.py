from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///potential_students.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    parent_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=False)
    student_name = db.Column(db.String(100), nullable=False)
    student_age = db.Column(db.String(10), nullable=False)
    program = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=True)

with app.app_context():
    db.create_all()

@app.route("/")
def home_redirect():
    return redirect('/home')

@app.route("/home")
def home_page():
    return render_template('home.html')

@app.route("/about")
def about_page():
    return render_template('about.html')

@app.route("/academics")
def academics_page():
    return render_template('academics.html')

@app.route("/admission")
def admission_page():
    return render_template('admission.html')

@app.route("/contact")
def contact_page():
    return render_template('contact.html')

@app.route("/student-life")
def student_life_page():
    return render_template('student-life.html')

@app.route("/form", methods=["GET", "POST"])
def form_page():
    if request.method == "POST":
        parent_name = request.form.get('parent_name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        student_name = request.form.get('student_name')
        student_age = request.form.get('student_age')
        program = request.form.get('program')
        message = request.form.get('message')

        new_student = Student(
            parent_name=parent_name,
            email=email,
            phone=phone,
            student_name=student_name,
            student_age=student_age,
            program=program,
            message=message
        )

        try:
            db.session.add(new_student)
            db.session.commit()
            return redirect(url_for('form_page'))
        except Exception as e:
            return f"Сталася помилка: {e}"
    return render_template('contact.html')

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port="5000", threaded=False)
