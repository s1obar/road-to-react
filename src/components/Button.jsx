import * as React from 'react'

const Button = ({isOpen, onCLick, children}) => {
    return (
        <div>
            <button type="button" onClick={onCLick}>{children}</button>
            &nbsp;

        </div>
    )
}

export default Button