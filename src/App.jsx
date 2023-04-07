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
    /**
        ?? - Javascript's nullish coalescing operator - evaluates empty string as true:
                localStorage.getItem(key) ?? 'React'
        || - evaluates empty string as false
     **/
    const useStorageState = (key, initialState) => {
        const [value, setValue] = React.useState(localStorage.getItem(key) ?? initialState)
        React.useEffect(() => {localStorage.setItem(key, value)}, [value, key])

        return [value, setValue]
    }

    const [searchTerm, setSearchTerm] = useStorageState('search', 'React')
    const handleSearch = ({target:{value}}) => {
        setSearchTerm(value)
    }

    const filteredStories = stories.filter(({title}) => title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <h1>Road to React</h1>
            <Search search={searchTerm} onSearch={handleSearch}/>
            <hr/>
            <List items={filteredStories}/>
        </div>
    )
}

export default App
