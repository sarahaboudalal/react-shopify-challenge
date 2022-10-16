import {useState, useEffect} from "react"

export default function LetsFetch() {
    const [keyID, setKeyID] = useState('')
    const [data, setData] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `http://www.omdbapi.com/?s=${keyID}&apikey=${API_KEY}`

    useEffect(()=>{
        fetch(url)
        .then((resp) => resp.json())
        .then((movies) => setData(movies))
    }, [url])

    return (
        <div className="searchBar">
        <h3>Seach Movie Title</h3>
        <form onSubmit={(e)=> e.preventDefault()}>
        <input placeholder="Movie Title" onChange={(e) => setKeyID(e.target.value)}></input>
        <button onClick={()=> console.log(data)}>Search</button>
        </form>
        </div>
    )
}
