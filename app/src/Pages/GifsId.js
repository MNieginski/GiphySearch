import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const GifId = (props) => {

    const {id} = useParams()

    const apiKey = "Na7X1jSoGMTdbT3KDOgN2lQXyNRBALP2"

    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`

    const [gif, setGif] = useState(null)

    const getGif = async () => {
        try {
            const response = await fetch(url)
            const gifData = response.json()
            console.log(gifData)
            setGif(gifData)

        } catch (err){
            console.log(err)
        }
    }

    useEffect (() => {
        getGif()
    }, [])

    const loaded = () => {
        console.log(gif);
        return (
          <div>
          </div>
        );
      };
    
      const loading = () => {
        return (<h1>Loading...</h1>);
      };

    return (
        <section>
            {gif ? loaded() : loading()}
            <div>
                <h2>{gif.title}</h2>
            </div>
        </section>
    )
}

export default GifId