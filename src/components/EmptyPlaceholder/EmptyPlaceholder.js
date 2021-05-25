import React from 'react';
import EmptyIcon from '../../img/empty-icon.svg'
import classes from './EmptyPlaceholder.module.css'
const EmptyPlaceholder = () => {
    return (
        <div className={classes.EmptyPlaceholder}>
            <div className={classes.EmptyPlaceholderContainer}>
                <img src={EmptyIcon} alt="" />
                <p>There is nothing here!! Start by creating a new project or selecting an existing one!!</p>
            </div>
        </div>
    );
};

export default EmptyPlaceholder;