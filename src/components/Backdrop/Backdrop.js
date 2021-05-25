import React from 'react';
import { connect } from 'react-redux';
import classes from './Backdrop.module.css'
const Backdrop = props => {
    const { sidebarOpened, mobile, bottom,  } = props
    const responsive = mobile ? classes.mobile : bottom ? classes.bottom : null
    const opened = props.opened ? classes.opened : classes.closed
    const style = sidebarOpened ? classes.slide : null
    const noopacity = props.noopacity ? classes.noopacity : null
    const transparent = props.transparent ? classes.transparent : null
    return (
        <div onClick={props.onclick} className={[classes.Backdrop, opened, style, responsive, noopacity, transparent].join(' ')}>
            {props.children}
        </div>
    );
};
const State = state =>{
    return {
        sidebarOpened : state.sidebarReducer.opened 
    }
}
export default connect(State)(Backdrop);