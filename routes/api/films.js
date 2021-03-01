const { Router, response} = require('express');
const router = Router();
const axios = require('axios');

const { movieDBKey, movieDBStem } = require('../../config/keys');

router.get('/search/:movieName', (req, response) => {
    const movieName = req.params.movieName;
    axios.get(`${movieDBStem}search/movie?api_key=${movieDBKey}&query=${movieName}`)
        .then(res => {
            response.send(res.data.results[0]);
            
        });
});

router.get('/data/:movie_id', (req, response) => {
    axios
        .get(`${movieDBStem}movie/${req.params.movie_id}?api_key=${movieDBKey}`)
        .then(res => {
            console.log(movie_id);
            const data = res.data;
            response.send(data);
        })
        .catch(error => console.log(error.config))
});


module.exports = router;