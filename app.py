from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)

# Configuração do MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['TrabalhoMongo']
collection = db['Pessoas']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Pessoas')
def listar_pessoas():
    pessoas = list(collection.find())
    for pessoa in pessoas:
        pessoa['_id'] = str(pessoa['_id'])
    return jsonify(pessoas)

@app.route('/Pessoas', methods=['POST'])
def adicionar_pessoa():
    data = request.json
    collection.insert_one(data)
    return jsonify({'message': 'Pessoa adicionada com sucesso!'})
    
@app.route('/pessoas/<id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def detalhes_editar_excluir_pessoa(id):
    if request.method == 'GET':
        pessoa = collection.find_one({'_id': ObjectId(id)})
        if pessoa:
            pessoa['_id'] = str(pessoa['_id'])
            return jsonify(pessoa)
        else:
            return jsonify({'message': 'Pessoa não encontrada'}), 404
    elif request.method == 'POST':
        data = request.json
        collection.update_one({'_id': ObjectId(id)}, {'$set': data})
        return jsonify({'message': 'Pessoa editada com sucesso!'})
    elif request.method == 'PUT':
        data = request.json
        collection.update_one({'_id': ObjectId(id)}, {'$set': data})
        return jsonify({'message': 'Pessoa editada com sucesso!'})
    elif request.method == 'DELETE':
        collection.delete_one({'_id': ObjectId(id)})
        return jsonify({'message': 'Pessoa excluída com sucesso!'})

if __name__ == '__main__':
    app.run(debug=True)
