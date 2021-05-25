import React, { useEffect, useState } from 'react';
import classes from '../Auth.module.css'
import authHook from '../../../hooks/auth-form-hook'
import icon from '../../../img/app-logo.png'
import {  SIGNUP } from '../../../redux/actions'
import { connect } from 'react-redux';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import Spinner from '../../../components/Spinner/Spinner';
import Form from '../Form/Form';

const Login = props => {
    const { signup, loading, message, reset} = props
    const { inputs, keys, setValue, resetInputs, title, links } = authHook('signup')
    const [ loadingImg, loadImg] = useState(true)

    const loginHandler = (e)=>{
        e.preventDefault()
        signup( {email : inputs.email.value, password : inputs.password.value, name : inputs.name.value})
    }
    useEffect(()=>{
            resetInputs()
            reset()
    },[resetInputs, reset])

    return (
        <div className={classes.Auth}>
            <div className={classes.AuthContainer}>
                {  loadingImg ? <Spinner/> : null}
                <img onLoad={() =>loadImg(false)} src={icon} alt="" />
                <h1 className={classes.Title}>{title}</h1>
                <Form
                keys={keys}
                inputs={inputs}
                errorMessage={message}
                onsubmit={loginHandler}
                links={links}
                loading={loading}
                setValue={setValue}
                submitTitle={title}
                />
            </div>
            { loading ? <LoadingPage/> : null}
        </div>
    );
};

const Actions = dispatch =>{
    return {
        signup : (user)=>dispatch({type : SIGNUP, user : user}),
        reset : ()=>dispatch({type : 'RESET_AUTH_MESSAGE'})
    }
}
const State = state => {
    return {
        loading : state.authReducer.checking,
        message : state.authReducer.message
    }
}
export default connect(State, Actions)(Login);