import React from 'react';
import classes from './FloatingButton.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';import { connect } from 'react-redux';
import { OPEN_TODO_MODAL } from '../../redux/actions';
const FloatingButton = props => {
    const { openTodoModal } = props
    return (
            <AddCircleIcon onClick={()=>openTodoModal()} className={classes.FloatingButton}/>
    );
};

const Actions = dispatch =>{
    return {
        openTodoModal : () => dispatch({type : OPEN_TODO_MODAL})
    }
}

export default connect(null, Actions)(FloatingButton);