import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const GifId = (props) => {

    const { id } = useParams()

    const [gif, setGif] = useState(null)
    const [load, setLoad] = useState(true)

    const getGif = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            const gifData = await response.json()
            console.log(gifData)
            console.log(response)
            setGif(gifData.data)
            setLoad(false)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getGif()
    }, [load])

    const loaded = () => {
        console.log(gif);
        return (
            <div>
                <h1>Gif Details: </h1>
                <img key={gif.id} alt=""
                    src={gif.images.original.url} />
                <h2>{gif.title}</h2>
                <h3> This Gif was trending on: {gif.trending_datetime}</h3>
                <h4>This Gif is rated: {gif.rating}</h4>
                <p>Frames: {gif.images.original.frames}-fps</p>
                <p>Height: {gif.images.original.height}px</p>
                <p>width: {gif.images.original.width}px</p>
            </div>
        );
    };

    const loading = () => {
        return (<h1>Loading...</h1>);
    };

    return (
        <section>
            {gif ? loaded() : loading()}

        </section>
    )
}

export default GifId