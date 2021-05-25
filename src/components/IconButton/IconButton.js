import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const IconButton = props => {
    const { icon ,onclick, selected, color } = props

    const style = makeStyles({
        root : {
            color : selected ? color :  '#ccc',
            '& :hover' : {
                color : color
            }
        }
    })
    const Icon = icon
    const classes = style()
    return (
        <Icon 
        className={classes.root}
        onClick={onclick}  
     />

    );
};

export default IconButton;