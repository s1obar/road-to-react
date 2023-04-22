import * as React from 'react'

const InputWithLabel = ({id, type = 'text', value, children, onInputChange, isFocused, autoComplete = 'off'}) => {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if(isFocused && inputRef.current){
            inputRef.current.focus()
        }
    }, [isFocused])

    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input id={id} autoComplete={autoComplete} ref={inputRef} type={type} value={value} onChange={onInputChange}/>
        </>
    )
}

export default InputWithLabel