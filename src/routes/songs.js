const express = require('express');
const controller = require('../controllers/songsController.js');

const router = express.Router();

router.get('/songs', controller.getAllSongs);
router.get('/songs/:artist', controller.getSong);
router.post('/songs', controller.addSong);
// router.put('/songs/:id', controller.updateSong);
router.delete('/songs/:id', controller.deleteSong);

module.exports = router;