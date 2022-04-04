//utiliza o sequelize
 
const { Sequelize, DataTypes} = require('sequelize')
const path = require('path')


const sequelize = new Sequelize ({
    //cria um banco na raiz do projeto
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '..', '..', 'db.sqlite')
})

//criando o modelo de bd para os clientes

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false,
    }
})

//falar para o sequelize criar esta tabela no BD
Cliente.sync()

//exportando o bd
module.exports = Cliente