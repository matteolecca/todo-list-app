import React from 'react';
import classes from './UserPage.module.css'
import { connect } from 'react-redux';
import UserField from './UserField/UserField';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import icon from '../../img/app-logo.png'
import HomeButton from '../../components/HomeButton/HomeButton';
const UserPage = props => {
    const {user} = props

    return (
        <div className={classes.UserPage}>
            <img alt="" src={icon} />
            <div className={classes.UserDatas}>
                <div className={classes.UserDataContainer}>
                    <h3>Your data</h3>
                    <div className={classes.UserData}>
                        <PersonIcon />
                        <h4>{user.name}</h4>
                    </div>
                    <div className={classes.UserData}>
                        <EmailOutlinedIcon />
                        <h4>{user.email}</h4>
                    </div>
                </div>
                <div className={classes.UserDataContainer}>
                    <h3>Update</h3>
                    <UserField id="password" title="Password" type="password" />
                </div >
            </div>
            <HomeButton/>
        </div>
    );
};

const State = state =>{
    return {
        user : state.authReducer.user
    }
}

export default connect(State)(UserPage);