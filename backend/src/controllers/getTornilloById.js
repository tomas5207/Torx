const { Tornillo } = require('../db');
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const getTornilloById = async (req, res) => {
    const { id } = req.params;
    try {
        console.log('Modelo Tornillo:', Tornillo); // Log para verificar el modelo
        const dbTornillo = await readFile('src/json/dbTornillo.json', 'utf-8');
        const dbTornilloJson = JSON.parse(dbTornillo);
        const dbTornillos = dbTornilloJson.tornillo; 
        
        const existingTornillo = await Tornillo.count();
        if (existingTornillo === 0) {
            await Tornillo.bulkCreate(dbTornillos);
        }
        const tornillos = await Tornillo.findByPk(id);
        res.json(tornillos);
    } catch (error) {
        console.error('Error al procesar la solicitud:', error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getTornilloById };