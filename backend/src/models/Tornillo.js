const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Tornillo', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
        descripción: {
            type: DataTypes.TEXT
        },
        tamaño: {
            type: DataTypes.STRING
        },
        piezas: {
            type: DataTypes.INTEGER
        },
        puntero: {
            type: DataTypes.STRING
        },
        stock:{
            type: DataTypes.INTEGER
        },
        precio:{
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false
    }); 
};