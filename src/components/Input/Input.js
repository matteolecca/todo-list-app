import React from 'react';
import classes from './Input.module.css'
import { isMobile } from "react-device-detect";
const Input = props => {
    const { type, placeholder, value, required, disabled, halfborder, onchange, focused, ID, lowpadding, pattern,patternMsg } = props
    const borderStyle = halfborder ? classes.halfBorder : null
    const requiredPlaceholder = required ? '*' : ''
    const padding = lowpadding ? classes.lowpadding : null
    return (
        <div className={[classes.InputContainer, padding].join(' ')}>
        {props.children}
        <input 
        ref={ focused && !isMobile ? input => input && input.focus() : null}
        pattern={pattern ? pattern : null}
        title={patternMsg ? patternMsg : null}
        required={required}
        className={[classes.Input, borderStyle].join(' ')}
        placeholder={placeholder + requiredPlaceholder}
        type={type}
        value={value}
        disabled={disabled}
        onChange={e=>onchange(e.target.value, ID)}
        />
        </div>
    );
};

export default Input;