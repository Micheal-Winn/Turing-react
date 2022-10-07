import React from 'react'
import MovieList from './MovieList';

const movieData = [
    {
        "_id": "630dcc2b3a57c4f371f5ea19",
        "title": "spiderman Noway Home",
        "director": {
            "name": "James",
            "_id": "630dcc2b3a57c4f371f5ea1a"
        },
        "year": 1995,
        "__v": 0
    },
    {
        "_id": "633fd1a9f352eb25ce2b050e",
        "title": "SpiderMan No Way Home",
        "director": {
            "name": "James Cameron",
            "_id": "633fd1a9f352eb25ce2b050f"
        },
        "year": 2020,
        "__v": 0
    },
    {
        "_id": "633fd1e3f352eb25ce2b0514",
        "title": "Myo Myo Lay yay",
        "director": {
            "name": "Thant Zin Win",
            "_id": "633fd1e3f352eb25ce2b0515"
        },
        "year": 2022,
        "__v": 0
    }
]


function MovieListPage() {
    const movieList = movieData;
  return (
    <MovieList movieList={movieList} />
  )
}

export default MovieListPage