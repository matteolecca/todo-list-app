import React from 'react';
import classes from './TodoDetails.module.css'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ScheduledIcon from '@material-ui/icons/DateRange'
import Button from '../../../components/Button/Button';
import moment from 'moment'
const TodoDetails = props => {
    const { todo, close } = props
    console.log('tododetails', todo)
    return (
        <div className={classes.TodoDetails}>
            <div className={classes.DetailsContainer}>
            <label className={classes.Title}>{todo.title} </label>
            {todo.date  ? 
            <div className={classes.DetailsRow}>
                <ScheduledIcon className={classes.CalendarIcon}/><label>{todo.date === moment(new Date()).format('YYYY-MM-DD') ? 'Today' : todo.date}</label>
            </div> : null}
            { todo.important === 1 ? 
            <div className={classes.DetailsRow}>
                <LabelImportantIcon className={classes.ImportantIcon}/>
                <label>Important</label>
            </div>
            : null
        }
            <Button onclick={close}>Close</Button>
            </div>
        </div>
    );
};

export default TodoDetails;