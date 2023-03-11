import * as React from 'react'

const list = [
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

function List(){
    return (
        <ul>
            { list.map(function (item){
                return (
                    <li key={item.objectID}>
                        <span>{item.title}</span>
                        <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                )
            })}
        </ul>)
}

export default List