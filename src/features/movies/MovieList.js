import React from 'react'
import Movies from './Movies'

function MovieList({movieList}) {
  return (
        <div>
            {
                movieList.map(movie => <Movies key={movie._id} movie={movie}/>)
            }
        </div>
  )
}

export default MovieList