import * as React from 'react'
import Item from "./Item.jsx";

const List = (props) => {
    console.log("List renders")

    const rawListItems = props.items
    const itemElements = rawListItems.map((item) => <Item key={item.objectID} item={item} />)  
    
    return (
        <ul>
            {itemElements}
        </ul>
        )
    }

export default List