import * as React from 'react'
import Item from "./Item.jsx";

const List = ({items}) => {
    /**
        Different syntax for spread operator and rest operator
        const itemElementsSpreadOperator = items.map((item) => <Item key={item.objectID} item={item}/>)
        const itemElementsRestOperator = items.map(({objectID, ...item}) => <Item key={objectID} {...item}/>)
    **/

    const itemElements = items.map(({objectID, ...item}) => <Item key={objectID} {...item}/>)

    return (
        <ul>
            {itemElements}
        </ul>
    )
}

export default List