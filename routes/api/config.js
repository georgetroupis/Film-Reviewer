const { Router, response} = require('express');
const router = Router();
const axios = require('axios');

const { movieDBKey } = require('../../config/keys');

router.get('/stems', (req, response) => {

    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${movieDBKey}`)
        .then(res => {
            
            response.send(res.data.images);    
        })
        .catch(error => console.log(error))           

});

module.exports = router;