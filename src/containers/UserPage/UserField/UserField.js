import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import classes from './UserField.module.css'
import { connect } from 'react-redux';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import { validateInput } from '../../../helper/inputValidator';
import { UPDATE_PWD } from '../../../redux/actions';
const UserField = props => {
    const { id, type, title} = props
    const { updating, updateUser } = props
    const [ value, setValue ] = useState('')
    const valid = validateInput(value, type)
   
    const submitHandler = () => {
      if(valid){
          updateUser(id, value)
      }
  }
    return (
      <FormControl className={classes.UserField} variant="outlined">
      <InputLabel  htmlFor="outlined-adornment-password">{title}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={type === 'password' ? 'password' : "number" }
        onChange={(e)=>setValue(e.target.value)}
        value={value}
        inputProps={{ pattern: "\\d*" } }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={ !updating ? submitHandler : null}
              onMouseDown={()=>{}}
              edge="end"
              disabled={!valid}
            >
              {updating  ? 
              <LoopOutlinedIcon  className={classes.rotate}/> 
              : 
              <ArrowForwardOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={100}
      />
    </FormControl>
    );
};
const State = state =>{
  return {
      updating : state.pwdResetReducer.resetting
  }
}
const Actions = dispatch =>{
  return{
      updateUser : (type, value)=>dispatch({type:UPDATE_PWD, valueType : type, value : value})
  }
}
export default connect(State, Actions)(UserField);