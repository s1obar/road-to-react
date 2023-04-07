import * as React from 'react'
import Item from "./Item.jsx";

const List = ({items}) => {
    console.log("List renders")

    const itemElements = items.map((item) => <Item key={item.objectID} item={item}/>)

    return (
        <ul>
            {itemElements}
        </ul>
    )
}

export default List