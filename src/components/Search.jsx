import * as React from 'react'

const Search = ({search, onSearch}) => {
    console.log("Search renders")

    // const handleBlur = (event) => {
    //     console.log(event.target.value)
    // }

    return (
        // <> can also be use instead of <React.Fragment>
        <React.Fragment>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={search} onChange={onSearch} /*onBlur={handleBlur}*//>
        </React.Fragment>
    )
}

export default Search