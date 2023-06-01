const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    
})

module.exports = Usuario