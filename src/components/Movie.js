import React from 'react';

const Movie = ({url, children}) => {

    return (
        <>
            <h3>{children}</h3>
            <p>{url}</p>
        </>
    )
};

export default Movie;