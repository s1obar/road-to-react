import * as React from 'react'

const Search = () => {
    const handleChange = (event) => {
        console.log(event)
        console.log(event.target.value)
    }

    const handleBlur = (event) => {
        console.log(event)
        console.log(event.target.value)
    }
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange} onBlur={handleBlur}/>
        </div>
    )
}

export default Search