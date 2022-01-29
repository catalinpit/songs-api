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
        'SELECT * FROM songs WHERE id = $1', [req.params.id], (error, results) => {
            if (error) throw error;

            res.status(200).json(results.rows);
        }
    );
};


const getSongsFromArtist = (req, res) => {
    pool.query(
        `SELECT * FROM songs WHERE $1 = ANY(artists)`, [req.params.name], (error, results) => {
            if (error) throw error;

            res.status(200).json(results.rows);
        }
    );
};

const addSong = (req, res) => {
    const { name, genre, released, artists } = req.body;

    pool.query(
        `INSERT INTO songs (name, genre, released, artists) VALUES ($1, $2, $3, $4)`, [name, genre, released, artists], (error, results) => {
            if (error) throw error;

            res.status(200).json(`Song added successfully!`);
        }
    );
};

const updateSong = (req, res) => {
    const { name, genre, released, artists } = req.body;

    pool.query(
        'UPDATE songs SET(name, genre, released, artists) = ($1, $2, $3, $4) WHERE id = $5', [name, genre, released, artists, req.params.id], (error, results) => {
            if (error) throw error;

            res.status(200).json(`Song ${req.params.id} updated successfully!`);
        }
    );
};

const deleteSong = (req, res) => {
    pool.query(
        'DELETE FROM songs WHERE id = $1', [req.params.id], (error, results) => {
            if (error) throw error;

            res.status(200).json(`Song number ${req.params.id} deleted successfully`);
        }
    );
};

module.exports = {
    getAllSongs,
    getSong,
    getSongsFromArtist,
    addSong,
    updateSong,
    deleteSong
};