import React  from 'react';
import classes from './FloatingMenu.module.css'
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { connect } from 'react-redux';
import { DELETE_PROJECT } from '../../redux/actions';
import Backdrop from '../Backdrop/Backdrop';
const FloatingMenu = props => {
    const { currentTodo, deleteTodo, close } = props
    const deleteHandler = () =>  deleteTodo(currentTodo.ID)
   
    return (
        <React.Fragment>
        <Backdrop opened onclick={close}/>
        <div className={classes.FloatingMenu}>
            <Button onclick={deleteHandler} icon={DeleteIcon} title="Delete project"/>
            <Button onclick={()=>console.log(true)}icon={EditOutlinedIcon} title="Edit project"/>
        </div>
        </React.Fragment>
    );
};
const Button = props => {
    const { title, icon, onclick } = props 
    const Icon = icon
    return (
        <div onClick={onclick} className={classes.Button}>
            <Icon/>
            <span>{title}</span>
            </div>
    )
}

const Actions = dispatch =>{
    return {
        deleteTodo  : (ID) => dispatch({type : DELETE_PROJECT, ID : ID}),
    }
}
const State = state =>{
    return {
         currentTodo : state.currentTodoReducer
    }
}
export default connect(State, Actions)(FloatingMenu);