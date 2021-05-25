import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../AddTodo/AddTodo';
import AddtodoList from '../AddTodo/AddtodoList';
import SideMenu from '../SideMenu/SideMenu';
import Todo from '../Todo/Todo';
import classes from './Home.module.css'
const Home = props => {
    const { sideMenuOpened, todoModalOpened, todoListModalOpened } = props
    const style = sideMenuOpened ? classes.opened : null
    return (
        <React.Fragment>
            <div className={[classes.Home, style].join(' ')}>
                <SideMenu />
                <Todo opened={sideMenuOpened} />
            </div>
            {todoListModalOpened ? <AddtodoList /> : null}
            {todoModalOpened ? <AddTodo /> : null}
        </React.Fragment>
    );
};
const State = state => {
    return {
        sideMenuOpened: state.sidebarReducer.opened,
        todoModalOpened: state.modalTriggerReducer.todoModalOpened,
        todoListModalOpened: state.modalTriggerReducer.todoListModalOpened,
    }
}
export default connect(State)(Home);