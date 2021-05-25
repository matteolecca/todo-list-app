import React, { useState } from 'react';
import classes from './TodoItem.module.css'
import RadioComponent from '@material-ui/core/Radio';
import Skeleton from '@material-ui/lab/Skeleton';
import { DELETE_TODO } from '../../../redux/actions';
import { connect } from 'react-redux';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import EventIcon from '@material-ui/icons/Event';
import ScheduledIcon from '@material-ui/icons/DateRange'
import Modal from '../../Modal/Modal';
import TodoDetails from '../TodoDetails/TodoDetails';
const TodoItem = props => {
    const { item, todoListID, deleteTodo, today } = props
    const { color, title, ID, important, date } = item
    const [checked, check] = useState(false)
    const [opened, open] = useState(false)
    const openHandler = () => {
        open(!opened)
    }
    const checkHandler = () => {
        check(true)
        deleteTodo(ID, todoListID)
    }
    return (
        <div className={classes.TodoItem}>
            { checked ? <Skeleton variant="text" width={"80%"} height={25} /> :
                <div className={classes.ItemRow}>
                    <RadioComponent checked={checked} onClick={checkHandler} style={{ padding: 0, marginRight: '10px', color: color }} />
                    <span className={classes.Title} onClick={openHandler}>{title}</span>
                </div>}
            <div className={classes.ItemRow}>
                {important === 1 ? <LabelImportantIcon className="sec-color-icon" /> : null}
                {date ? <ScheduledIcon className="green-color-icon" /> : null}
                {today === 1 ? <EventIcon className="sec-color-icon" /> : null}
            </div>
            {opened && !checked ? <Modal>
                <TodoDetails close={openHandler} todo={item} />
            </Modal> : null}
        </div>
    );
};

const Actions = dispatch => {
    return {
        deleteTodo: (ID, todoListID) => dispatch({ type: DELETE_TODO, todoID: ID, todoListID: todoListID })
    }
}

export default connect(null, Actions)(TodoItem);