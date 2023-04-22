import * as React from 'react'

const RadioButton = ({label, type='radio', checkedValue, onChange}) => {
    return (
        <div>
            <label>
                <input type={type} checked={checkedValue} onChange={onChange}/>
                {label}
            </label>
        </div>
    )
}

export default RadioButton