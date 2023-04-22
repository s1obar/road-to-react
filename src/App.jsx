import * as React from 'react'
import InputWithLabel from "./components/InputWithLabel.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";

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
    const [isDisabled, setIsDisabled] = useStorageState('disabled_button',  true)

    const handleSearch = ({target:{value}}) => {
        setSearchTerm(value)
    }

    const [isOpen, setOpen] = React.useState( false);

    const handleOpen = () => {
        setOpen(true)
        setIsDisabled('disabled')
    }

    const handleClose = () => {
        setOpen(false)
        setIsDisabled('')
    }

    const filteredStories = stories.filter(({title}) => title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <h1>Road to React</h1>
            {isOpen && <div>Open button was clicked</div>}

            <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={handleSearch}><strong>Search:</strong></InputWithLabel>
            <hr/>
            <List items={filteredStories}/>
            <Button isOpen={isOpen} onCLick={handleOpen}>Open</Button>
            <br/>
            <Button isOpen={isOpen} onCLick={handleClose}>Close</Button>
            <br/>
            <Button id='disabled_button' disabled={isDisabled} isOpen={isOpen} onCLick={handleClose}>Disabled button</Button>
        </div>
    )
}

export default App
