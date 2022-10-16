import {useState, useEffect} from "react"

export default function LetsFetch() {
    const [keyID, setKeyID] = useState('')
    const [data, setData] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `http://www.omdbapi.com/?t=${keyID}&apikey=${API_KEY}`

    useEffect(()=>{
        fetch(url)
        .then((resp) => resp.json())
        .then((movies) => setData(movies))
    }, [url])

    return (
        <div>
        <form onSubmit={(e)=> e.preventDefault()}>
        <input onChange={(e) => setKeyID(e.target.value)}></input>
        <button onClick={()=> console.log(data)}>Click me</button>
        </form>
        </div>
    )
}
