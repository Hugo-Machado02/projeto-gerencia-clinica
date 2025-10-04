import React from 'react'
import './InputGroup.css'
import usePasswordToggle from '../../hooks/usePasswordToggle'

const InputGroup = ({type, value, name, onChange, label}) => {
    const {inputType, Icon, toggleVisibility} = usePasswordToggle();

    const finalType = type === 'password' ? inputType : type;
    const hasPasswordToggle = type === 'password';


    return (
        <div className='input-group'>
            <div className="group-element">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className='group-element'>
                <input type={finalType} value={value} name={name} onChange={onChange} id={name}/>

                {hasPasswordToggle && (
                    <span 
                        className="password-toggle" 
                        onClick={toggleVisibility}
                    >
                        <Icon/>
                    </span>
                )}
            </div>
        </div>
    )
}

export default InputGroup
