import * as React from 'react'

const Search = ({search, onSearch}) => {
    console.log("Search renders")

    // const handleBlur = (event) => {
    //     console.log(event.target.value)
    // }

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={search} onChange={onSearch} /*onBlur={handleBlur}*//>
        </div>
    )
}

export default Search