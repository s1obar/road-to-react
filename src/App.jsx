import * as React from 'react'

const welcome = {
    greeting: 'Hey',
    title: 'React!'
}

const numbers = [1, 2, 3]

function renderNumbersFromArray(){
    return numbers.map(num => <h3>{num}</h3>)
}

function getWelcome(){
    return welcome;
}

function App() {
    return (
        <div>
            <h1>
                { getWelcome().greeting } { getWelcome().title }
            </h1>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text"/>
            { renderNumbersFromArray() }
        </div>
    )
}

export default App
