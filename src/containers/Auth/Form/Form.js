import React from 'react';
import Input from '../../../components/Input/Input';
import classes from './Form.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const Form = props => {
    const { onsubmit, errorMessage, inputs, keys, links, loading, setValue, submitTitle } = props
    return (
        <form onSubmit={onsubmit} className={classes.AuthForm}>
            {
                keys ? keys.map(input =>{
                    const Icon = inputs[input].icon
                    return(
                        <Input
                        type={inputs[input].type}
                        key={input}
                        ID={input}
                        required
                        valid={inputs[input].valid}
                        placeholder={inputs[input].text}
                        value={inputs[input].value}
                        onchange={setValue}
                        pattern={inputs[input].pattern}
                        patternMsg={inputs[input].patternMsg}
                    >
                        <Icon />
                    </Input>
                    )
                }
                   )
                    : null
            }
            <div className={classes.ButtonsContainer}>
                {links.map(link => <NavLink key={link.ID} to={link.to}>{link.title}</NavLink>)}
            </div>
            <p className={classes.ErrorMessage}>{errorMessage}</p>
            <Button loading={loading}>{submitTitle}</Button>
        </form>
    );
};

export default Form;