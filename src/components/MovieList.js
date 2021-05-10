import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
    
    const movieNodes = movies.map(movie => {
        return (
            <Movie url={movie.url} key={movie}>{movie.name}</Movie>
        );
    });

    return (
        <>
            {movieNodes}
        </>
    )
};

export default MovieList;