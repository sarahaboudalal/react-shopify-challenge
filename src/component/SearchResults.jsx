import React, {useContext} from "react"
import { MovieStore } from "../store/MovieStore";
import SingleMovie from "../component/SingleMovie"

export default function SearchResults(){


    const { movies, error } = useContext(MovieStore)


    return(
        <div>
        <h1>Results:</h1>
        {movies && movies.Search ? movies.Search.slice(0, 5).map((movie) => {
           return <SingleMovie key={movie.imdbID} img={movie.Poster} title={movie.Title} year={movie.Year}/> 
        })
        : <p>{error}</p>}
        </div>
    )
}