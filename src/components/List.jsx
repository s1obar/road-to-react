import * as React from 'react'
import Item from "./Item.jsx";

const List = (props) => (
        <ul>
            { props.items.map((item) => {
                return (
                    <Item key={item.objectID} item={item} />
                )
            })}
        </ul>
)


export default List