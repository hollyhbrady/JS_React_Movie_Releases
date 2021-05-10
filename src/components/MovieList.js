import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
    
    const movieNodes = movies.map(movie => {
        return (
            <Movie key={movie}>{movie.name}</Movie>
        );
    });

    return (
        <>
            <p>{movieNodes}</p>
        </>
    )
};

export default MovieList;