import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './Button.module.css'
import { NavLink } from 'react-router-dom';
const LinkButton = props => {
    const centered = props.centered ? classes.centered : null
    const color = props.color ? classes[props.color] : null
    const content = props.loading ? <CircularProgress className={classes.Spinner}/> : props.children
    return (
        <NavLink onClick={props.onclick} to={props.to} className={[classes.Button, color, centered].join(' ')}>
            {content}
        </NavLink>
    );
};

export default LinkButton;