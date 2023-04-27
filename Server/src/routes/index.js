const {login} = require('../controllers/login');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const {getCharByID} = require('../controllers/getCharById');

const router = require('express').Router();

router.get('/character/:id', (req,res) => {
    getCharByID(req,res)
});

router.get('/login', (req,res) => {
    login(req,res)
});

router.post('/fav', (req,res) => {
    postFav(req,res)
});

router.delete('/fav/:id', (req,res) => {
    deleteFav(req,res)
});

module.exports = router;
