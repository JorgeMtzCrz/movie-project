const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const uploadCloud = require('../config/cloudinary')

/* GET home page */
router.get('/', async(req, res, next) => {
    const movies = await Movie.find()
    res.render('index', {
        movies
    });
});

router.get('/movie/add', (req, res) => {
    res.render('movie-add')
})

router.post('/movie/add', uploadCloud.single('photo'), async(req, res) => {
    const {
        title,
        description
    } = req.body
    const {
        url: imgPath,
        originalname: imgName
    } = req.file

    await Movie.create({
        title,
        description,
        imgName,
        imgPath

    })
    res.redirect('/')
})

module.exports = router;