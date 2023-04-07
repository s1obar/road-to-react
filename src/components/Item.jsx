import * as React from 'react'

const Item = ({item: {url, title, author, num_comments, points}}) => {
    console.log("Item renders")

    return <li>
        <span>{title}</span>
        <span>
                        <a href={url}>{title}</a>
                    </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>
}


export default Item