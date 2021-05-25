import React from 'react';
import classes from './Spinner.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = props => {
    const { message} = props
    const big = props.big ? classes.big : null
    const absolutepos = props.absolutepos ? classes.absolutepos : null
    return( 
    <div className={absolutepos} style={{ color : '#fff',display : 'grid', alignItems : 'center', justifyContent : 'center'}}>
    <CircularProgress className={[classes.spinner, big, absolutepos].join(' ')}/>
    {message ? <label>{message}</label> : null}
    </div>)
};
export default Spinner;