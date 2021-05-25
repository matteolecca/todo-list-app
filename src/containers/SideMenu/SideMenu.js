import React  from 'react';
import classes from './SideMenu.module.css'
import SideBarHook from '../../hooks/sidebar-hook'
import MainMenuItem from './MainMenuItem/MainMenuItem';
import { connect } from 'react-redux';
import { ADD_PROJECT, OPEN_SIDEBAR } from '../../redux/actions';
import ProjectsContainer from './Projects/ProjectsContainer/ProjectsContainer';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModeButton from '../../components/ModeButton/ModeButton';
import LogoutButton from '../../components/Button/LogoutButton';
const SideMenu = props => {
    const { opened, openSideBar } = props
    const { sidebarItems, } = SideBarHook()
    const myref = React.useRef(null)



    const style = opened ? classes.opened : classes.closed
    return (
        <React.Fragment>
            <div ref={myref} className={[classes.SideMenu, style].join(' ')}>
                <div className={classes.SideMenuContainer}>
                    <h3>Menu</h3>
                </div>
                <div className={classes.SideMenuContainer}>
                    {
                        sidebarItems.main.map(item => <MainMenuItem close={openSideBar} today={item.today} scheduled={item.scheduled} important={item.important} key={item.id} color={item.color} icon={item.icon} title={item.title} />)
                    }
                </div>
                <div className={classes.SideMenuContainer}>
                    <ProjectsContainer />
                </div>
                <div className={classes.SideMenuContainer}>
                    <ModeButton />
                </div>
                <div className={classes.SideMenuContainer}>
                    <LogoutButton />
                </div>
            </div>
            {opened ? <Backdrop mobile opened={opened} /> : null}
        </React.Fragment>
    );
};

const State = state => {
    return {
        opened: state.sidebarReducer.opened
    }
}
const Actions = dispatch => {
    return {
        addProject: title => dispatch({ type: ADD_PROJECT, project: title }),
        openSideBar: () => dispatch({ type: OPEN_SIDEBAR })
    }
}
export default connect(State, Actions)(SideMenu);

