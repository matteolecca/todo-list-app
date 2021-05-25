import React, { useState } from 'react';
import classes from './Colorbar.module.css'
import Colorcircle from './Colorcircle';


const COLORS = [
    {ID : 0, color : '#A3D16EFF'},
    {ID : 1, color : '#EF8C56FF'},
    {ID : 2, color : '#ED6C59FF'},
    {ID : 3, color : 'rgb(221, 214, 67)'},
    {ID : 4, color : '#DE789DFF'},
    {ID : 5, color : '#7FA6F8FF'}]

    const Colorbar = props => {
    const [colorSelected, selectColor] = useState(0)
    const handleColorSelect = (color) => {
        selectColor(color)
        props.onchange(COLORS[color].color, props.ID)
    }
    return (
        <div className={classes.Colorbar}>
            <label className={classes.title}>Pick a color</label>
            <div className={classes.Colorcontainer}>
                {COLORS.map(color => {
                    return <Colorcircle 
                    selected={colorSelected}
                    select={handleColorSelect}
                    ID={color.ID} 
                    color={color.color} 
                    key={color.ID} />
                })}
            </div>
        </div>
    );
};

export default Colorbar;