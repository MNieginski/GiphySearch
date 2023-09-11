import React from "react";
import {useState, useEffect} from "react"

function GiphyMain (props) {
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState("")
    const [results, setResults] = useState(null)

    const fetchGifs = async () => {
        try {
            const apiKey = "Na7X1jSoGMTdbT3KDOgN2lQXyNRBALP2"
            const response = await fetch("https://api.giphy.com/v1/gifs/trending")
            const gifData = await response.json() 
        }



        catch (err) {
            console.log(err)
        }
    }

    const handleSearch = () => {

    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    return(
        <div>
            <h1>Test Main......</h1>
            <input value={query} onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default GiphyMain