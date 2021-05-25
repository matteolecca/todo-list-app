import React, { useEffect } from 'react';
import classes from './Todo.module.css'
import TodoItem from './TodoItem/TodoItem';
import TodoTopbar from './TodoTopbar/TodoTopbar';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { LOAD_IMPORTANT_TODO, LOAD_SCHEDULED_TODO, LOAD_TODAY_TODO, LOAD_TODO, OPEN_TODO_MODAL } from '../../redux/actions';
import Spinner from '../../components/Spinner/Spinner';
import Skeleton from '@material-ui/lab/Skeleton';
import EmptyPlaceholder from '../../components/EmptyPlaceholder/EmptyPlaceholder';

const Todo = props => {
    const { currentTodo, loadTodos, opened, openTodoModal, loadImportantTodos, loadScheduledTodo,loadTodayTodo } = props
    const style = opened ? null : classes.closed
    const myref = React.useRef(null)

    useEffect(() => {
        if (!currentTodo.unset) {
            if (currentTodo.important) loadImportantTodos()
            else if (currentTodo.scheduled) loadScheduledTodo()
            else if (currentTodo.today) loadTodayTodo()
            else loadTodos(currentTodo.ID)
        }
    }, [loadTodos, currentTodo.unset, currentTodo.ID, currentTodo.important,currentTodo.today, currentTodo.scheduled, loadImportantTodos, loadScheduledTodo, loadTodayTodo])

    const emptyPlaceholder = <EmptyPlaceholder />
    const loadingPlaceholder = <div className={classes.LoadingContainer}><Spinner big /></div>
    const component =
        <React.Fragment>
            <div className={classes.TodoContainer}>
                <TodoTopbar title={currentTodo.title} />
            </div>
            <React.Fragment>
                <div className={classes.TodoContainer}>
                    {
                        currentTodo.todos ? 
                        currentTodo.todos.length === 0 ? <label>Nothing yet...</label> : 
                        currentTodo.todos.map(t => <TodoItem todoListID={currentTodo.ID} key={t.ID} item={t} />) : null
                    }
                    {currentTodo.adding ? <Skeleton style={{ padding: '10px 0' }} variant="text" height={25} /> : null}
                </div>
                {currentTodo.ID ?
                    <div onClick={() => openTodoModal()} className={classes.AddTodoRow}>
                        <AddIcon className={classes.AddoTodoIcon} />
                        <span>Add Task</span>
                    </div> : null}
            </React.Fragment>
        </React.Fragment>


    return (
        <div ref={myref} className={[classes.Todo, style].join(' ')}>
            {
                currentTodo.loading ? loadingPlaceholder : currentTodo.unset ? emptyPlaceholder : component
            }
        </div>
    )

};

const State = state => {
    return {
        currentTodo: state.currentTodoReducer
    }
}
const Actions = dispatch => {
    return {
        loadTodos: (todolistID) => dispatch({ type: LOAD_TODO, todolistID: todolistID }),
        loadImportantTodos: () => dispatch({ type: LOAD_IMPORTANT_TODO }),
        loadScheduledTodo: () => dispatch({ type: LOAD_SCHEDULED_TODO }),
        loadTodayTodo: () => dispatch({ type: LOAD_TODAY_TODO }),
        openTodoModal: () => dispatch({ type: OPEN_TODO_MODAL }),

    }
}
export default connect(State, Actions)(Todo);