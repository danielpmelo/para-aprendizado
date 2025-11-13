# Reference: blueprint:python_log_in_with_replit
from flask import session, render_template, request, jsonify
from app import app, db
from replit_auth import require_login, make_replit_blueprint
from flask_login import current_user
from models import Contact

app.register_blueprint(make_replit_blueprint(), url_prefix="/auth")

@app.before_request
def make_session_permanent():
    session.permanent = True

@app.route('/')
def index():
    return render_template('index.html', user=current_user)

@app.route('/about')
def about():
    return render_template('about.html', user=current_user)

@app.route('/dashboard')
@require_login
def dashboard():
    return render_template('dashboard.html', user=current_user)

@app.route('/profile')
@require_login
def profile():
    return render_template('profile.html', user=current_user)

@app.route('/api/health')
def health():
    return jsonify({"status": "ok", "message": "Backend Flask rodando!"})

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json if request.json else {}
    contact = Contact()
    contact.name = data.get('name', '')
    contact.email = data.get('email', '')
    contact.message = data.get('message', '')
    contact.user_id = current_user.get_id() if current_user.is_authenticated else None
    db.session.add(contact)
    db.session.commit()
    return jsonify({"status": "success", "message": "Mensagem enviada com sucesso!"})

@app.route('/api/contacts')
@require_login
def get_contacts():
    contacts = Contact.query.filter_by(user_id=current_user.get_id()).all()
    return jsonify([{
        'id': c.id,
        'name': c.name,
        'email': c.email,
        'message': c.message,
        'created_at': c.created_at.isoformat()
    } for c in contacts])
