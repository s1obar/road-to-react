import * as React from 'react'

const InputWithLabel = ({id, label, type = 'text', value, children, onInputChange}) => {
    console.log("Search renders")

    // const handleBlur = (event) => {
    //     console.log(event.target.value)
    // }
        return (
            <>
                <label htmlFor={id}>{children}</label>
                &nbsp;
                <input id={id} type={type} value={value} onChange={onInputChange} /*onBlur={handleBlur}*//>
            </>
        )
}

export default InputWithLabel