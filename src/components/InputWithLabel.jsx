import * as React from 'react'

const InputWithLabel = ({id, label, type = 'text', value, children, onInputChange, isFocused, autoComplete = 'off'}) => {
    console.log("Search renders")

    // const handleBlur = (event) => {
    //     console.log(event.target.value)
    // }
        return (
            <>
                <label htmlFor={id}>{children}</label>
                &nbsp;
                <input id={id} autoComplete={autoComplete} type={type} value={value} autoFocus={isFocused} onChange={onInputChange} /*onBlur={handleBlur}*//>
            </>
        )
}

export default InputWithLabel