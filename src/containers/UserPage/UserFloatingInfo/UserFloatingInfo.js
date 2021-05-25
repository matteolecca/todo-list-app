import React from 'react';
import classes from './UserFloatingInfo.module.css'
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Backdrop from '../../../components/Backdrop/Backdrop';
import { connect } from 'react-redux';
import LinkButton from '../../../components/Button/LinkButton';
const UserFloatingInfo = props => {
    const { close, user } = props
    return (
        <React.Fragment>
            <div className={classes.UserFloatingInfo}>
                <div className={classes.InfoContainer}>
                    <h4>User</h4>
                    <div className={classes.Info}>
                        <PersonIcon />
                        <label>{user.name}</label>
                    </div>
                    <div className={classes.Info}>
                        <EmailOutlinedIcon />
                        <label>{user.email}</label>
                    </div>
                    <div className={classes.Info}>
                        <LinkButton onclick={close} to="/account">Info</LinkButton>
                    </div>
                </div>
            </div>
            <Backdrop onclick={close} transparent opened />
        </React.Fragment>
    );
};
const State = state =>{
    return {
        user : state.authReducer.user
    }
}
export default connect(State)(UserFloatingInfo);