require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, HOST, PORT, DB_NAME } = process.env;
const Tornillo_Model = require('./models/Tornillo');

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`, {
    logging: false, native: false 
});

Tornillo_Model(database);

const { Tornillo } = database.models;

database.sync()
    .then(() => console.log('Modelos sincronizados con la base de datos.'))
    .catch(err => console.error('Error al sincronizar modelos:', err));

module.exports = { database, Tornillo };
