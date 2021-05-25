import React  from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
const StaticDatePicker = props => {
const { date, setDate } = props

  const dateHandler = (e) =>{
      console.log(e)
      setDate(e)
    
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={dateHandler}
      />
    </MuiPickersUtilsProvider>
  );
};

export default StaticDatePicker;
