import React, { useEffect, useState } from 'react';
import { searchFilm } from '../actions/itemActions';
import { image_base_url } from '../config';
import './Film.css';

import {
    Link,
} from 'react-router-dom'

import {
    Rating,
} from '@material-ui/lab';

export default function Film(props) {

    const filmTitle = props.filmTitle;
    const [value, setValue] = useState(5);

    const [filmData, setData] = useState([]);

    useEffect(() => {
            const promise = new Promise ( (resolve) => {
            resolve( searchFilm(filmTitle))
        });

        promise
            .then( result => {
                setData(result.data);
            })
    }, [filmTitle]
    );

    return ( 

        
        <div className="film_space" >
            
            <Link to={{
                pathname: `movie/${filmData.id}`,
                movie_id: filmData.id,
            }} >
                <img className="film_image" src= {`${image_base_url}w500/${filmData.poster_path}`} width='150' alt = {`${filmTitle} poster`}/>
            </Link>
            <div className ="middle">
                <div className="Title">{filmTitle}</div>
            </div>

            <Rating 
                name={props.id} 
                size="small" 
                value={value} 
                max={10} 
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}

