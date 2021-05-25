import React, { useEffect, useState } from 'react';
import classes from '../Auth.module.css'
import authHook from '../../../hooks/auth-form-hook'
import icon from '../../../img/app-logo.png'
import { LOGIN } from '../../../redux/actions'
import { connect } from 'react-redux';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import Spinner from '../../../components/Spinner/Spinner';
import Form from '../Form/Form';
import authclasses from '../Auth.module.css'
const Login = props => {
    const { login, loading, message, reset} = props
    const { inputs, keys, setValue, resetInputs, title, links } = authHook('login')
    const [ loadingImg, loadImg] = useState(true)

    const loginHandler = (e)=>{
        e.preventDefault()
        login({email : inputs.email.value, password : inputs.password.value})
    }
    useEffect(()=>{
            resetInputs()
            reset()
    },[resetInputs, reset])

    return (
        <div className={authclasses.Auth}>
            <div className={authclasses.AuthContainer}>
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
        login : (user)=>dispatch({type : LOGIN, user : user}),
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