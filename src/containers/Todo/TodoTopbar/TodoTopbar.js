import React, { useState } from 'react';
import classes from './TodoTopbar.module.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FloatingMenu from '../../../components/FloatingMenu/FloatingMenu';
import { connect } from 'react-redux';
const TodoTopbar = props => {
    const { title, currentTodo } = props
    const [ menuOpened, openMenu ] = useState(false)
    const menuHandler = () =>openMenu(!menuOpened)
    return (
        <div className={classes.TodoTopbar}>
            <h4>{title}</h4>
            {currentTodo.ID ? 
            <div className={classes.ButtonsContainer}>
                <MoreHorizIcon onClick={menuHandler} className={classes.EditIcon}/>
            </div> : null}
            {menuOpened ? <FloatingMenu close={()=>openMenu(false)}/> : null}
        </div>
    );
};
const State = state => {
    return {
        currentTodo: state.currentTodoReducer
    }
}
export default connect(State)(TodoTopbar);