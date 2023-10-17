# expenseControlApp
App desenvolvido nas aulas de Dispositivos móveis - FATEC COTIA 4º Semestre</br>

Este app é um controle de gastos em que usa técnicas de finanças pessoais para ajudar o usuário a controlar suas despesas.


--------------------

# Backend do Projeto

Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento.

## Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend.

### 1. Clone o Repositório


```bash
git clone https://github.com/Dexx777/api-filmes.git
```
### 2.1 Configure o Backend NODE + EXPRESS
```powershell

cd expenseControlApp/backend/src

npm install express --save
npm install -g nodemon
npm install --save sequelize
npm install --save body-parser
npm install --save mysql2
npm install --save-dev sequelize-cli
npm install dotenv
npm install cors -i

npx sequelize db:create
npx sequelize db:migrate
```