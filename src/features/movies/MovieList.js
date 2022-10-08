import React from "react";

import Movies from "./Movies";

    function MovieList({movieList,deleteBtnHandler,editHandler}) {
        return (
            <div>
                {
                    movieList.map(movie => <Movies
                        key={movie._id}
                        deleteBtnHandler={deleteBtnHandler}
                        editHandler = {editHandler}
                        movie={movie}/>)

                }
            </div>
        )
    }

    export default MovieList