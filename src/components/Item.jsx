import * as React from 'react'

const Item = (props) => {
    console.log("Item renders")

    return <li>
        <span>{props.item.title}</span>
        <span>
                        <a href={props.item.url}>{props.item.title}</a>
                    </span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
        <span>{props.item.points}</span>
    </li>
}



export default Item