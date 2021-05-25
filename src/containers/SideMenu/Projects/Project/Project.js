import React from 'react';
import classes from './Project.module.css'
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import { connect } from 'react-redux';
import { OPEN_SIDEBAR, SELECT_CURRENT_TODO } from '../../../../redux/actions';
import { isMobile } from 'react-device-detect';

const Project = props => {
    const { ID,  selectTodo, currentTodo, openSideBar, title, color } = props
    const selected = currentTodo === title ? classes.selected : null

    const selectHandler = () =>{
        selectTodo(title,ID)
        if(isMobile)openSideBar()
    }
    return (
        <div onClick={selectHandler} className={[classes.Project, selected].join(' ')}>
            <CircleIcon style={{ color: color }} fontSize="small" />
            <span>{title}</span>
        </div>
    )
}
const State = state =>{
    return {
        currentTodo : state.currentTodoReducer.title
    }
}
const Actions = dispatch =>{
    return {
        selectTodo : (title, ID) =>dispatch({type : SELECT_CURRENT_TODO, title : title, ID : ID}),
        openSideBar : () =>dispatch({type : OPEN_SIDEBAR })
    }
}
export default connect(State, Actions)(Project);