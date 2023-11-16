from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)
# Configuração do banco de dados MySQL
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'mysql',
    'database': 'login',
}

# Função para criar a tabela no banco de dados
def create_table():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL
        )
    ''')
    conn.commit()
    conn.close()
@app.route("/")
def home():
    return render_template("index.html")

# Rota para listar todos os usuários
@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM usuarios')
    usuarios = cursor.fetchall()
    conn.close()
    return jsonify({'usuarios': usuarios})

# Rota para criar um novo usuário
@app.route('/usuarios', methods=['POST'])
def criar_usuario():
    novo_usuario = request.json
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO usuarios (nome, email, senha) VALUES (%s, %s, %s)
    ''', (novo_usuario['usuario'], novo_usuario['email'], novo_usuario['senha']))
    conn.commit()
    conn.close()
    return jsonify({'mensagem': 'Usuário criado com sucesso'})

@app.route('/login', methods=['POST'])
def verificar_login():
    dados_login = request.json
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    print(dados_login)
    cursor.execute('''
        SELECT * FROM usuarios WHERE email = %s AND senha = %s
    ''', (dados_login['email'], dados_login['senha']))
    
    usuario = cursor.fetchone()
    conn.close()
    if usuario:
        return jsonify({'mensagem': 'Login bem-sucedido'})
    else:
        return jsonify({'mensagem': 'Login falhou. Verifique suas credenciais'})
    

if __name__ == '__main__':
    create_table()  # Crie a tabela quando o aplicativo for iniciado
    app.run(debug=True)
