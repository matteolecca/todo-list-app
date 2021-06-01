import React, { useEffect, useRef } from 'react';
import classes from './Popup.module.css'
import Task from '@material-ui/icons/AssignmentTurnedInOutlined';
import { connect } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { RESET } from '../../redux/actions';
import { CSSTransition } from 'react-transition-group';
const Popup = props => {
    const { success, error, message, closeModal } = props
    const ref = useRef(null)
    const opened = success || error ? classes.opened : classes.closed
    const color = error ? classes.error : null

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                closeModal()
            }, 2000);
        }
    }, [success, error, closeModal])

    return (
        <CSSTransition nodeRef={ref} timeout={500} mountOnEnter unmountOnExit>
            <div ref={ref} className={[classes.Popup, opened, color].join(' ')}>
                <div className={classes.PopupContainer}>
                    {error ? <CancelIcon onClick={() => closeModal()} className={classes.closeIcon} /> : <div></div>}
                    <div className={classes.messageRow}>
                        <Task />
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

const State = state => {
    return {
        error: state.appStateReducer.error,
        success: state.appStateReducer.success,
        message: state.appStateReducer.message,
    }
}

const Actions = dispatch => {
    return {
        closeModal: () => dispatch({ type: RESET })
    }
}

export default connect(State, Actions)(Popup);