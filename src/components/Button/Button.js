import React  from 'react';
import classes from './Button.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Button = props => {
    const {  onclick, big, fullwidth } = props
    const centered = props.centered ? classes.centered : null
    const color = props.color ? classes[props.color] : null
    const size = big ? classes.big : fullwidth ? classes.fullwidth : null
    // const [lazy, setLazy] = useState(false)
    const content = props.loading  ? <CircularProgress  className={classes.Spinner} /> : props.children

    return (
        <button disabled={props.disabled} onClick={ onclick } className={[classes.Button, centered, color,size].join(' ')}> {content}</button>
    )
}


export default Button;