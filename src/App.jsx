import * as React from 'react'
import InputWithLabel from "./components/InputWithLabel.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";
import RadioButton from "./components/RadioButton.jsx";
import Checkbox from "./components/Checkbox.jsx";

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
    const [isDisabled, setIsDisabled] = useStorageState('disabledButton',  true)

    const handleSearch = ({target:{value}}) => {
        setSearchTerm(value)
    }

    const [isOpen, setOpen] = React.useState( false);
    const [favorite, setFavorite] = React.useState(null);
    const [isCheckedOne, setIsCheckedOne] = React.useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = React.useState(false);


    const handleCatChange = () => {
        setFavorite('cat')
    }

    const handleDogChange = () => {
        setFavorite('dog')
    }

    const handleCheckboxOneChange = () => {
        setIsCheckedOne(!isCheckedOne)
    }
    const handleCheckboxTwoChange = () => {
        setIsCheckedTwo(!isCheckedTwo)
    }

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
            <Button id='disabledButton' disabled={isDisabled} isOpen={isOpen} onCLick={handleClose}>Disabled button</Button>
            <br/>
            <RadioButton label='Cat' checkedValue={favorite === 'cat'} onChange={handleCatChange}/>
            <RadioButton label='Dog' checkedValue={favorite === 'dog'} onChange={handleDogChange}/>
            <Checkbox label='Checkbox 1' value={isCheckedOne} onChange={handleCheckboxOneChange}/>
            <Checkbox label='Checkbox 2' value={isCheckedTwo} onChange={handleCheckboxTwoChange}/>
        </div>
    )
}

export default App
