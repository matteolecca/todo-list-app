import React from 'react';
import Backdrop from '../../components/Backdrop/Backdrop';
import classes from './Modal.module.css'
const Modal = props => {
    const bottom = props.bottom  ? classes.bottom : null
    return (
        <Backdrop opened bottom>
            <div className={[classes.Modal, bottom].join(' ')}>
                {props.children}
            </div>
        </Backdrop>
    )
};

export default Modal;