import * as React from 'react'

const Button = ({isOpen, type='button', onCLick, children, ...rest}) => {
    return (
        <div>
            <button type={type} onClick={onCLick} {...rest}>{children}</button>
            &nbsp;

        </div>
    )
}

export default Button