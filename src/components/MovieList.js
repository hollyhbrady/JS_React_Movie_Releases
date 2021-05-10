import React from 'react';
import Movie from './Movie';

const MovieList = () => {
    
    const movieNodes = movies.map(movie => {
        return (
            <Movie />
        );
    });

    return (
        <>
            <p>individ movies</p>
        </>
    )
}