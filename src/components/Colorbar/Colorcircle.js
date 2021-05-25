import React from 'react';
import Radio from '@material-ui/core/Radio';
const Colorcircle = props => {
   
    return (
        <Radio
        style={{color:props.color}}
        checked={props.selected === props.ID}
        onChange={()=>props.select(props.ID)}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
    );
};

export default Colorcircle;