// We want to develop two different views within GalleryItem,
//one to represent the standard at-a-glance preview,
//and a detail view if a user clicks on one of these results.
//To do so, we can use the ternary operator in our return statement.
import React, { useState } from "react";

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleView = () =>{
        return(
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h5>{props.item.releaseDate}</h5>
            </div>
        )
    }

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'border-radius':'15px',
        // 'background-color':'black',
        // 'font':'lightgrey'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',                    
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundSize': 'contain',
        'color': 'orange',
        'border-radius':'25px',
        'padding':'1%'
    }
    
//"not view", or !view, changes the useState to true
    return (
        <div onClick={()=> setView(!view)} style={{'display':'inline-block'}}>
            {/*Ternary shows simple view when "view" is false */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem