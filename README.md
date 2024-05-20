# TrabalhoNOSQL

TRABALHO 1: Desenvolvimento de CRUD com MongoDB

Utilizamos do `MongoDB` como banco de dados não relacional para armazenar os dados.
Para apresentar esses dados de forma agradável, implementamos a solução de uma aplicação WEB básica.

Na aplicação, utilizamos de `HTML 5`, `CSS 3`, `JavaScript`, `Python` e `Bootstrap`.
Foram utilizados frameworks do python para auxiliar no desenvolvimento. São eles:  

`Flask`: Um micro framework para desenvolvimento web;  
e `Flask-PyMongo`, com o objetivo de fazer a ponte entre o Flask e o MongoBD, garantindo conveniencia e praticidade. 


--------------------------------------------------------------------


## Requisitos para pleno funcionamento do sistema:

### Banco de Dados:

#### É necessário:
* Ter instalado o MongoDB na máquina;
* Estabelecer uma conexão local com as seguintes configurações:
    > client = MongoClient('mongodb://localhost:27017/')  
    > db = client['TrabalhoMongo']  
    > collection = db['Pessoas']  


### Gerais:

#### É necessário:
* Ter instalado na máquina a versão mais recente do Python;
    > Pode ser instalada com o comando: pip install pyton.   
    > Caso já tenha o Python instalado, para verificar a sua versão, no cmd digite: pip python -V

* Ter instalado na máquina o Flask para Python;
    > Pode ser instalada com o seguinte comando: pip install Flask

* Ter instalado na máquina o FlaskPyMongo
    > Pode ser instalada com o seguinte comando: pip install Flask pymongo

----------------------------------------------------------------------

Para acessar a aplicação, basta acessar o diretório no terminal e digitar o seguinte comando:  
      
    D:\projetos\TrabalhoNOSQL> python app.py
    
Obs: O diretório pode variar na sua máquina.


----------------------------------------------------------------------

## Link para o vídeo no YouTube:

    https://www.youtube.com/watch?v=sTuqyT57QK8
----------------------------------------------------------------------

FIM!

