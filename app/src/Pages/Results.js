import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Results({results}) {

    const renderResults = results?.map((curGif) => (
        <Link to={`/gifs/${curGif.id}`} key={curGif.id}>
            <img key={curGif.id} className="gif"
                src={curGif.images.fixed_height.url}>
            </img>
        </Link>
    ));
    return(
        <div>
            {renderResults}
        </div>
    )
}

export default Results