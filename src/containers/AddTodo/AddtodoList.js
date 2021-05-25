import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import Colorbar from '../../components/Colorbar/Colorbar';
import Input from '../../components/Input/Input';
import { ADD_TODO_LIST, OPEN_TODO_LIST_MODAL } from '../../redux/actions';
import Modal from '../Modal/Modal';
import classes from './AddTodo.module.css'
const AddtodoList = props => {
    const { onclick, addTodoList, closeTodolistModal } = props
    const [todoTitle, setTodoTitle] = useState('')
    const [color, setColor] = useState('')

    const addTodoListHandler = () => {
        addTodoList({ title: todoTitle, color: color })
        closeTodolistModal()
    }
    return (
        <Modal onclick={onclick}>
            <div className={classes.AddTodo}>
                <div className={classes.Title}>
                <div >Create new to-do list</div>
                </div>
                <div className={classes.AddTodoListItems}>
                    <div className={classes.Item}>
                        <Input focused lowpadding onchange={setTodoTitle} placeholder="To-do list name" />
                    </div>
                    <div className={classes.Item}>
                        <Colorbar onchange={setColor} />
                    </div>
                </div>
                <div className={classes.AddTaskContainer}>
                    <Button
                        color="gray"
                        onclick={()=>closeTodolistModal()}
                    >Cancel
                    </Button>
                    <Button
                        onclick={addTodoListHandler}
                        disabled={color === '' && todoTitle === ''}
                    >Create list
                    </Button>

                </div>
            </div>
        </Modal>
    );
};
const Actions = dispatch => {
    return {
        addTodoList: (todolist) => dispatch({ type: ADD_TODO_LIST, todolist: todolist }),
        closeTodolistModal: () => dispatch({ type: OPEN_TODO_LIST_MODAL}),

    }
}
export default connect(null, Actions)(AddtodoList);
