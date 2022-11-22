import { useState, useEffect, useParams } from "react";

function ArtistView() {
    const {id} = useParams()
    const [artistData, setArtistData] = useState([])

    return(
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data here</p>
        </div>
    )
}

export default ArtistView