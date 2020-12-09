import React,{ useState } from 'react'
import useInputField from './Hooks/useInputField'

const Pay = (props) => {
    const { value, setValue} = useInputField('')
    return (       
      <div> 
        <span className ="badge m-2 badge-secondary"><h5>Required to Pay: {props.toPay}</h5></span><br/>
        <input className="input-lg  m-2" type="number" step={0.1} value={value} onChange={(e) => setValue(e.target.value)}  disabled={props.disable}  placeholder='Enter amount'/>
        <button className="btn-primary" disabled={props.disable} onClick={()=>props.calculate(value)}>
            <h4>Pay</h4></button>
      </div>
    )
 }
export default Pay