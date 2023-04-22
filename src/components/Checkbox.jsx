import * as React from 'react'

const RadioButton = ({label, type='checkbox', value, onChange}) => {
    return (
        <div>
            <label>
                <input type={type} checked={value} onChange={onChange}/>
                {label}
            </label>
        </div>
    )
}

export default RadioButton