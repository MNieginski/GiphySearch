import React from "react";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function GiphyMain(props) {
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

    const renderGifs = gifs?.map((curGif) => (
        <Link to={`/gifs/${curGif.id}`}>
            <img key={curGif.id}
                src={curGif.images.fixed_height.url}>
            </img>
        </Link>
    ));


    const handleSearch = async (e) => {
        try {
            const apiKey = "Na7X1jSoGMTdbT3KDOgN2lQXyNRBALP2"
            const response = await fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=&limit=10`)

        }

        catch (err) {
            console.log(err)
        }
    }
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        fetchGifs()
    }, [])

    const renderResults = results?.map((r) => (
        <Link to={`/gifs/${r.id}`}>
            <img key={r.id}
                src={r.images.fixed_height.url}>
            </img>
        </Link>
    ))


    const loaded = () => {
        return (
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

    return (
        <div>
            <section>{isLoading ? loading() : loaded()}</section>
            <h1>Test Main......</h1>
            <form>
                <input type="text" value={query} onChange={handleChange} />
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
            <section>{results ? renderResults : renderGifs}</section>
        </div>
    )
}

export default GiphyMain