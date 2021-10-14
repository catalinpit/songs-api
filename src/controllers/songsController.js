const pool = require('../db/db');

const getAllSongs = (req, res) => {
    pool.query(
        'SELECT * FROM songs', (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        })
};

module.exports = {
    getAllSongs
};