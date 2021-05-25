import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_MODE } from '../../redux/actions';
import classes from './ModeButton.module.css'
import LightIcon from '@material-ui/icons/Brightness6';
import DarkIcon from '@material-ui/icons/Brightness4';
import Button from '../Button/Button';
const ModeButton = props => {
    const { mode, changeMode } = props
    return (
        <div className={classes.Mode}>
            <label className={classes.ModeTitle}>Mode</label>
                <Button onclick={() => changeMode()}>{mode === 'light' ? <LightIcon className={classes.light} /> : <DarkIcon className={classes.dark} />}
                    <span>{mode}</span></Button>
        </div>
    );
};
const Actions = dispatch => {
    return {
        changeMode: () => dispatch({ type: CHANGE_MODE }),
    }
}

const State = state => {
    return {
        mode: state.sidebarReducer.mode
    }
}
export default connect(State, Actions)(ModeButton);