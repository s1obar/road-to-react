import * as React from 'react'
import Search from "./components/Search.jsx";
import List from "./components/List.jsx";

const App = () => {
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

    const stories1 = [
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

    return (
        <div>
            <h1>Road to React</h1>
            <Search/>
            <hr/>
            <List items={stories}/>
        </div>
    )
}

export default App
