import React, {useState} from 'react';
function ColorPicker(){
    const [color, setColor]= useState("#000000");



function handleColorChange(event){
    setColor(event.target.value);
}
return (
    <div className="color-picker">
        <h2>Color Picker</h2>
        <div className="color-display" style={{backgroundColor: color}}>
          <p>Selected Color: {color}</p>  

        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>)
        }
export default ColorPicker;