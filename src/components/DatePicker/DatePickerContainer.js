import React from 'react';
import StaticDatePicker from './DatePicker';
import classes from './DatePicker.module.css'
import Switch from '@material-ui/core/Switch';

const DatePickerContainer = props => {
    const { schedule, scheduled, } = props
    const style = scheduled ? classes.opened : classes.closed
    return (
        <div className={classes.DatePickerContainer}>
            <div className={classes.TitleRow}>
                <label>Schedule</label>
                <Switch
                onClick={schedule}
                checked={scheduled}
                color="primary"
                />
            </div>
            <div className={[classes.DateContainer, style].join(' ')}>
                <StaticDatePicker {...props} />
            </div>
        </div>
    );
};

export default DatePickerContainer;