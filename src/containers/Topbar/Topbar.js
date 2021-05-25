import React, { useState } from 'react';
import classes from './Topbar.module.css'
import { OPEN_SIDEBAR } from '../../redux/actions';
import { connect } from 'react-redux';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../img/topbar-logo.png'
import PersonIcon from '@material-ui/icons/Person';
import UserFloatingInfo from '../UserPage/UserFloatingInfo/UserFloatingInfo';
const Topbar = props => {
    const { open, opened } = props
    const [ info, showInfo ] = useState(false)
    return (
        <div className={classes.Topbar}>
            <div className={classes.TopbarContainer}>
                <Hamburger
                    toggled={opened}
                    onToggle={open}
                    size={20}
                    color="#fff"
                />
                <PersonIcon className={classes.ButtonIcon} onClick={()=>showInfo(!info)} />
            {info ? <UserFloatingInfo close={()=>showInfo(!info)}/> : null}
            </div>
            <div className={classes.MainIconContainer}>
                <img src={logo} alt="" />
                <label>task app</label>
            </div>
        </div>
    );
};
const State = state => {
    return {
        opened: state.sidebarReducer.opened
    }
}
const Actions = dispatch => {
    return {
        open: () => dispatch({ type: OPEN_SIDEBAR })
    }
}
export default connect(State, Actions)(Topbar);