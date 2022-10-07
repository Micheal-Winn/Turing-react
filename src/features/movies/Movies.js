import React from 'react'

function Movies({movie}) {
  return (
    <div className='form-control text-center p-5'>
        <div>
           <h1 className='text-primary'> {movie.title}</h1>
        </div>
        <div>
           <p className='text-success mt-3'>Year {movie.year}</p>
        </div>
        <div>
           <p>Director  {movie.director.name}</p>
        </div>
    </div>
  )
}

export default Movies