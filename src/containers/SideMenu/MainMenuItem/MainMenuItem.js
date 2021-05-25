import React from 'react';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { SELECT_CURRENT_TODO } from '../../../redux/actions';
import classes from './MainMenuItem.module.css'
const MainMenuItem = props => {
    const { title, selectTodo, important, scheduled, today, close }  = props
    const Icon = props.icon
    const selectHandler = () =>{
        selectTodo(title, important, scheduled, today)
        if(isMobile) close()
    }
    return (
        <div onClick={selectHandler} className={classes.MainMenuItem}>
            <Icon />
            <span>{title}</span>
        </div>
    );
};
const Actions = dispatch =>{
    return {
        selectTodo : (title, important, scheduled, today) =>dispatch({type : SELECT_CURRENT_TODO, title : title, important : important, scheduled : scheduled, today : today}),
    }
}
export default connect(null, Actions) (MainMenuItem);