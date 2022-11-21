import React, { useState } from "react";

function SearchBar(props) {
    //let [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="Enter a search term here"
                onChange={(e)=> props.handleSearch(e, e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar