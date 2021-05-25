import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Colorbar from '../../components/Colorbar/Colorbar';
import Input from '../../components/Input/Input';
import classes from './AddTodo.module.css'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../Modal/Modal';
import { ADD_TODO, OPEN_TODO_MODAL } from '../../redux/actions';
import { connect } from 'react-redux';
import ScheduledIcon from '@material-ui/icons/DateRange';
import IconButton from '../../components/IconButton/IconButton';
import DatePickerContainer from '../../components/DatePicker/DatePickerContainer';
import moment from 'moment'
const AddTodo = props => {
    const { addTodo, currentTodo, closeTodoModal } = props
    const { loading } = currentTodo
    const [important, setImportant] = useState(false)
    const [scheduled, setScheduled] = useState(false)
    const [ date, setDate ] = useState(new Date())
    const setImportantHandler = () => setImportant(!important)

   
    const setScheduledHandler = () => {
        setScheduled(!scheduled)
    }

    const [todoName, setTodoName] = useState('')
    const [color, setColor] = useState('')
   
    const addTodoHandler = () => {
        closeTodoModal()
        addTodo({
            color: color,
            title: todoName,
            important: important ? 1 : 0,
            date : scheduled ?  moment(date).format('YYYY-MM-DD') : null
        }, currentTodo.ID)
    }

    return (
        <Modal bottom>
            {loading ?
                <Spinner big absolutepos /> :
                <div className={classes.AddTodo}>
                    <div className={classes.Title}>
                        <div >Add task</div>
                    </div>
                    <div className={classes.AddTodoListItems}>
                        <Input focused lowpadding onchange={setTodoName} placeholder="Task Name" />
                        <Colorbar onchange={setColor} />
                    </div>
                    <DatePickerContainer date={date} setDate={setDate} scheduled={scheduled} schedule={setScheduledHandler}/>
                    <div className={classes.AddTaskContainer}>
                        <div className={classes.ButtonsContainer}>
                            <Button
                                color="gray"
                                onclick={() => closeTodoModal()}
                            >Cancel
                            </Button>
                            <Button
                                disabled={todoName === ''} onclick={addTodoHandler}>Add Task</Button>
                        </div>

                        <div className={classes.IconsContainer}>
                            <IconButton color="#f05633" onclick={setImportantHandler} icon={LabelImportantIcon} selected={important} />
                            <IconButton color="#2a9df4" onclick={setScheduledHandler} icon={ScheduledIcon} selected={scheduled} />
                        </div>
                    </div>
                </div>
            }
        </Modal>
    );
};
const Actions = dispatch => {
    return {
        addTodo: (todo, ID) => dispatch({ type: ADD_TODO, todo: todo, ID: ID }),
        closeTodoModal: () => dispatch({ type: OPEN_TODO_MODAL }),
    }
}
const State = state => {
    return {
        currentTodo: state.currentTodoReducer,
    }
}
export default connect(State, Actions)(AddTodo);