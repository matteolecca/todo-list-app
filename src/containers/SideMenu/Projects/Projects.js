import React, { useState } from 'react';
import classes from './Projects.module.css'
import Project from './Project/Project';

const Projects = props => {
    const { title, todolists, ID, } = props
    const [selected, select] = useState(true)
    const [ newTodoOpened, openNewTodo ] = useState(false)
    const todosStyle = selected ? classes.todosSelected : classes.todosUnselected
    const openTodoHandler = () => openNewTodo(!newTodoOpened)
   
    return (
        <div className={classes.Projects}>
            <div className={[classes.ProjectsContainer, todosStyle].join(' ')}>
                {todolists.map((project, i) => <Project project={project} key={i} />)}
            </div>
        </div>
    );
};


export default (Projects);