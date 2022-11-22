import React, { useContext } from "react";
import {SearchContext} from '../context/SearchContext'

function SearchBar() {
    //Deconstruct the SearchContext object so that we have access to the term and handleSearch function.
    const {term,handleSearch} = useContext(SearchContext)
    return (
        <div>
            <form>
                <input
                ref={term}
                type="text"
                placeholder="Enter a search term here"
                />
                <button onClick={(e) => handleSearch(e,term.current.value)}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar