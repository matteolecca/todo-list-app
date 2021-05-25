import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LOAD_PROJECTS, OPEN_TODO_LIST_MODAL } from '../../../../redux/actions';
import Project from '../Project/Project';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import classes from './ProjectsContainer.module.css'
import { Skeleton } from '@material-ui/lab';

const ProjectsContainer = props => {
    const { loadProjects, projects, loading, openTodolistModal } = props
    const [expanded, expand] = useState(true)

    const style = expanded ? classes.expanded : null
    const arrowStyle = expanded ? classes.opened : classes.closed
    useEffect(() => {
        loadProjects()
    }, [loadProjects])


    return (
        <React.Fragment>
            <div className={classes.ProjectsTitle}>
                <div onClick={() => expand(!expanded)} className={classes.ExpandContainer}>
                    <ExpandMoreIcon fontSize="large"  className={arrowStyle} />
                    <span>Projects</span>
                </div>
                <AddIcon onClick={()=>openTodolistModal(true)} className={classes.NewProjectIcon} />
            </div>
            <div className={[classes.ExpandableContainer, style].join(' ')}>
                { projects ? projects.map((p, i) => {
                    return <Project key={p.ID} ID={p.ID} color={p.color} title={p.name} />
                }) : null}
                {loading ?
                    <div className={classes.SkeletonContainer}>
                        <Skeleton  variant="circle" height={15} width={15} />
                        <Skeleton  variant="text" height={25} width={125} />
                    </div> : null}
            </div>
        </React.Fragment>
    );
};
const Actions = dispatch => {
    return {
        loadProjects: () => dispatch({ type: LOAD_PROJECTS }),
        openTodolistModal : () => dispatch({type : OPEN_TODO_LIST_MODAL})
    }
}
const State = state => {
    return {
        projects: state.projectsReducer.projects,
        loading: state.projectsReducer.loading,
    }
}
export default connect(State, Actions)(ProjectsContainer);