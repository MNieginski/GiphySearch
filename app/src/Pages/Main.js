import React from "react";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function GiphyMain({ handleChange, handleSearch, query }) {
    const [isLoading, setIsLoading] = useState(true)

    const [initialGifs, setInitialGifs] = useState(null)


    const fetchGifs = async () => {
        try {
            const apiKey = "Na7X1jSoGMTdbT3KDOgN2lQXyNRBALP2"
            const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`)
            const gifData = await response.json()
            console.log(gifData)
            setInitialGifs(gifData.data)
            setIsLoading(false)
        }


        catch (err) {
            console.log(err)
        }
    }

    const renderGifs = initialGifs?.map((curGif) => (
        <Link to={`/gifs/${curGif.id}`} key={curGif.id}>
            <img key={curGif.id} className="gif"
                src={curGif.images.fixed_height.url}>
            </img>
        </Link>
    ));


    useEffect(() => {
        fetchGifs()
    }, [isLoading])


    const loaded = () => {
        return (
            <div>
                {/* <h1>Welcome to my Giphy API app!</h1>
                <h2>You can search for specific gifs, and clicking one will give you more information!</h2>
                <form>
                    <input type="text" value={query} onChange={handleChange} />
                    <button type="submit" onClick={handleSearch}>Search</button>
                </form> */}
                <section>{renderGifs}</section>
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
        </div>
    )
}

export default GiphyMain