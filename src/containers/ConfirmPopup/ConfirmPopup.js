import React from 'react';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../Modal/Modal';
import classes from './ConfirmPopup.module.css'
const ConfirmPopup = props => {
    const {message, clickMessage ,leaveMessage, onclick, leave, loading} = props
    return (
        <Modal onclick={leave}>
            {loading ? <Spinner/> : 
        <div className={classes.ConfirmPopup}>
            <h4>{message}</h4>
            <div className={classes.ButtonsContainer}>
                <Button color="dark" onclick={leave}>{leaveMessage}</Button>
                <Button onclick={onclick}>{clickMessage}</Button>
            </div>
        </div>}
        </Modal>
    );
};

export default ConfirmPopup;