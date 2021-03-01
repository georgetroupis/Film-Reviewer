import React from 'react';
import Film from './Film';
import { v4 as uuid } from 'uuid';
import './FilmList.css';


import {
    GridList,
    Box
} from '@material-ui/core';


export default function FilmList(props) {

    const filmArray = [

        {id: uuid(), title: 'Space Jam'},
        

    ];

    const filmComponent = filmArray.map(({ id, title }) => {
        return <Film key = {id} id ={id} filmTitle={title}/>
    })
    return (
        <Box style={{padding:'10%'}}>
            <GridList className="Grid">
                {filmComponent}
            </GridList>

        </Box>
    )
}
