import React, { useState } from 'react';
import classes from './UserData.module.css'
import { validateInput } from '../../../helper/inputValidator'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import { connect } from 'react-redux';

const UserData = props => {
    const { user, updating, updateUser } = props
    const [value, updateValue] = useState(user[props.id])
    const valid = validateInput(value, props.type)
    let invalidClass = !valid ? classes.invalid : null
    let invalidButton = !valid ? classes.invalidButton : null

    
    const submitHandler = () => {
        if(valid){
            updateUser(props.id, value)
        }
    }
    const valueChangeHandler = ( e) => {
        updateValue(e.target.value)
    }

    return (
        <div className={[classes.UserData].join(' ')}>
            <div>
                {props.children}
                <label>{props.title}</label>
            </div>
            <div>
            <input 
            className={invalidClass} 
            onChange={(e) => valueChangeHandler(e)} 
            type={props.type}
            id={props.id} 
            pattern="\d*"
            defaultValue={user[props.id] || ""} />
            {
                !updating ?
                <ArrowForwardOutlinedIcon className={invalidButton}  onClick={submitHandler} />
                :
                <LoopOutlinedIcon className={classes.rotate}/>
            }
            </div>
        </div>
    );
};

const State = state =>{
    return {
        user : state.authReducer.user,
        updating : state.authReducer.updating
    }
}
const Actions = dispatch =>{
    return{
        updateUser : (type, value)=>dispatch({type:'UPDATE_USER', valueType : type, value : value})
    }
}
export default connect(State,Actions) (UserData);