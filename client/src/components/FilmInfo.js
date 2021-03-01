import React, { useState, useEffect} from 'react';
import { getFilmData } from '../actions/itemActions';
import {image_base_url} from '../config';

export default function FilmInfo(props) {

    const [filmData, setData] = useState({});
    const movie_id = props.match.params.movie_id;

    useEffect(() => {

        const promise = new Promise ( (resolve) => {
            resolve( getFilmData(movie_id))
        });

        promise
            .then( result => {
                setData(result); 
                console.log(filmData);
            })
    }, [movie_id]
    );

    return (
        <>
            
            <div id="img"
                style={{
                    backgroundImage: `${image_base_url}original/${filmData.backdrop_path}`, 
                    backgroundSize:"cover"
                }}>
            </div>
        </>
    )
}

