import {useState, useEffect, useContext} from "react"
import { MovieStore } from "../store/MovieStore";

export default function SearchMovies() {
    const [keyID, setKeyID] = useState('')
    const { setMovies, movies } = useContext(MovieStore);
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `http://www.omdbapi.com/?s=${keyID}&apikey=${API_KEY}`

    useEffect(()=>{
        fetch(url)
        .then((resp) => resp.json())
        .then((movies) => 
        setMovies(movies))
    }, [url, setMovies])

    return (
        <div className="searchBar">
        <h3>Seach Movie Title</h3>
        <form 
        onSubmit={(e)=> e.preventDefault()}>
        <input 
        placeholder="Movie Title" 
        value={keyID}
        onChange={(e) => setKeyID(e.target.value)}>
        </input>
        <button type="submit" onClick={()=>console.log(movies)}>Search</button>
        </form>
        </div>
    )
}
