import React, { useEffect, useState } from 'react';
import classes from '../Auth.module.css'
import authHook from '../../../hooks/auth-form-hook'
import icon from '../../../img/app-logo.png'
import { RESET_PWD } from '../../../redux/actions'
import { connect } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import Form from '../Form/Form';
import authclasses from '../Auth.module.css'
import LinkButton from '../../../components/Button/LinkButton';
const PasswordReset = props => {
    const { resetPwd, loading, message, pwdResetted, reset} = props
    const { inputs, keys, setValue, resetInputs, title, links } = authHook()
    const [ loadingImg, loadImg] = useState(true)

    const resetPwdHandler = (e)=>{
        e.preventDefault()
        resetPwd({email : inputs.email.value})
    }
    useEffect(()=>{
            resetInputs()
            reset()
    },[resetInputs, reset])

    const confirm = <div>
        <p style={{textAlign : 'center'}}>
            You will receive an email with your new password if an account associated with this email address exists 
            </p>
        <LinkButton to="/login">Login</LinkButton>
    </div>

    return (
        <div className={authclasses.Auth}>
            <div className={authclasses.AuthContainer}>
                {  loadingImg ? <Spinner/> : null}
                <img onLoad={() =>loadImg(false)} src={icon} alt="" />
                <h1 className={classes.Title}>{ pwdResetted ? 'Password Resetted' : title}</h1>
                {pwdResetted ? 
                confirm
                 : 
                <Form
                keys={keys}
                inputs={inputs}
                errorMessage={message}
                onsubmit={resetPwdHandler}
                links={links}
                loading={loading}
                setValue={setValue}
                submitTitle={title}
                />}
            </div>
        </div>
    );
};

const Actions = dispatch =>{
    return {
        resetPwd : (email)=>dispatch({type : RESET_PWD, email : email}),
        reset : ()=>dispatch({type : 'RESET_AUTH_MESSAGE'})
    }
}
const State = state => {
    return {
        loading : state.pwdResetReducer.resetting,
        pwdResetted : state.pwdResetReducer.resetted,
        message : state.authReducer.message
    }
}
export default connect(State, Actions)(PasswordReset);