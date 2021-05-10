import React, {useState} from 'react';
import MovieList from '../components/MovieList';

const MovieBox = () => {
    
    const [movies, setMovies] = useState (
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
              },
              {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
              },
              {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
              },
              {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
              },
              {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
              }
        ]
    )

    return (
        <>
            <h3>Upcoming Film Releases for UK</h3>
            <hr/>
            <ul>
                <li>
                    <MovieList movies={movies}/>
                </li>
            </ul>
            <hr/>
            <br/>
            <a id="releases" href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
        </>
    )
};

export default MovieBox;