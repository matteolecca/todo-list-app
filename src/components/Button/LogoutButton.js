import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/actions';
import Button from './Button';

const LogoutButton = props => {
    const { logout } = props
    const [ loading, setLoading] = useState(false)
    const logoutHandler =  () =>{
        setLoading(true)
        setTimeout(() => {
            localStorage.removeItem('token')
            logout()    
        }, 1500);
        
    }
    return (
        <Button  loading={loading} onclick={logoutHandler} fullwidth>Logout</Button>
    );
};
const Actions = dispatch =>{
    return {
        logout : ()=>dispatch({type : LOGOUT})
    }
}
export default connect(null,Actions)(LogoutButton);