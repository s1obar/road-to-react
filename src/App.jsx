import * as React from 'react'
import Search from "./components/Search.jsx";
import List from "./components/List.jsx";

const App = () => {
    console.log("App renders")
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0
        },
        {
            title: 'Redux',
            url: 'https://reactjs.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1
        }
    ]

    const handleSearch = (event) => {
        console.log("Printed from App component which is upwards from Search component. " +
            "It is done using the callback handler. Search term: " + event.target.value)
    }

    return (
        <div>
            <h1>Road to React</h1>
            <Search onSearch={handleSearch}/>
            <hr/>
            <List items={stories}/>
        </div>
    )
}

export default App
