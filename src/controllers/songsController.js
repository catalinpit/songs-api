const pool = require('../db/db');

const getAllSongs = (req, res) => {
    pool.query(
        'SELECT * FROM songs', (error, results) => {
            if (error) throw error;

            res.status(200).json(results.rows);
        }
    );
};

const getSong = (req, res) => {
    pool.query(
        `SELECT * FROM songs WHERE '${req.params.artist}'=ANY(artists)`, (error, results) => {
            if (error) throw error;

            res.status(200).json(results.rows);
        }
    );
};

const addSong = (req, res) => {
    pool.query(
        `INSERT INTO songs (name, genre, released, artists) VALUES ('${req.body.name}', '${req.body.genre}', '${req.body.released}', ($1))`, [req.body.artists], (error, results) => {
            if (error) throw error;

            res.status(200).json(results.rows);
        }
    );
};

const updateSong = (req, res) => {
    pool.query(
        `UPDATE songs SET(name, genre, released, artists) = ('${req.body.name}', '${req.body.genre}', '${req.body.released}', ($1))`, [req.body.artists], (error, results) => {
            if (error) throw error;

            res.status(200).json(`Song ${req.params.id} updated successfully!`);
        }
    );
};

const deleteSong = (req, res) => {
    pool.query(
        `DELETE FROM songs WHERE id=${req.params.id}`, (error, results) => {
            if (error) throw error;

            res.status(200).json(`Song number ${req.params.id} deleted successfully`);
        }
    );
};

module.exports = {
    getAllSongs,
    getSong,
    addSong,
    updateSong,
    deleteSong
};