import React from "react";
import {useState, useEffect} from "react"

function GiphyMain (props) {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const [query, setQuery] = useState("")
    const [results, setResults] = useState(null)

    const fetchGifs = async () => {
        try {
            const apiKey = "Na7X1jSoGMTdbT3KDOgN2lQXyNRBALP2"
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
            const gifData = await response.json() 
            console.log(gifData)
            setResults(gifData.data) 
        }


        catch (err) {
            console.log(err)
        }
    }

    const renderGifs = gifs?.map((curGif) => <img key={curGif.id} src={curGif.images.fixed_height.url}></img>);


    const handleSearch = () => {
        const filteredResults = gifs.filter((n) => {
            
        })
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        fetchGifs()
    },[])

    const renderResults = results?.map((r) => <img key={r.id} src={r.images.fixed_height.url}></img>)
    

    const loaded = () => {
        return(
            <div>
                <h1>Loaded!</h1>
            </div>
        )
    }

    const loading = () => {
        <div>
            <h1>Loading</h1>
        </div>
    }

    return(
        <div>
            <section>{isLoading ? loading() : loaded()}</section>
            <h1>Test Main......</h1>
            <input value={query} onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
            <section>{results ? renderResults : renderGifs}</section>
        </div>
    )
}

export default GiphyMain