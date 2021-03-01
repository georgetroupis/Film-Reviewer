import axios from 'axios';
// import { GET_FILM_IMAGE, SEARCH_FILMS} from './types';

export async function getFilmImage (filmName) {
    const url = await axios
        .get(`/api/films/image/${filmName}`)

    return url.data; 
};

export async function getFilmData (filmId) {

    console.log(filmId);
    const url = await axios
        .get(`/api/films/data/${filmId}`)

    await console.log(url.data);

    return url.data; 
};

export async function searchFilm (filmName) {

    const data = await axios
        .get(`/api/films/search/${filmName}`)
    return data;
};

export async function getDBConfig(){

    const configData = await axios
        .get('api/config/stems');

    // console.log(configData);
    return configData;
};

