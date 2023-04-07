import * as React from 'react'

const Search = (props) => {
    console.log("Search renders")

    const handleBlur = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={props.search} onChange={props.onSearch} onBlur={handleBlur}/>
        </div>
    )
}

export default Search