import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const DropDown = () => {
    const[count,setCount] = useState(0);
    const[disable,setDisable] = useState(false);
    const[dropDowns,setDropDowns] = useState([]);

    const inputHandler=()=>{
            if(count<8){
                setDropDowns([...dropDowns,count+1])
                setCount(prevCount=>prevCount+1)
            }
            if(count+1===8){
                setDisable(true);
            }
    }
  return (
    <div>
        {dropDowns.map((item,index)=>(
            <select key={index}>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            ))}
        <button onClick={inputHandler} disabled={disable}>Add</button>
        
    </div>
  )
}
