import React from 'react'
import '../App.css';

function CoinContainer(props) {
    
    
    return (
        <tr>
        <div className="container">
           
        <td> <span className ="myBadge badge m-2 badge-secondary"><h5>Value:{props.value}</h5></span></td>
        <td><span className ="myBadge badge m-2 badge-secondary"><h5>Count:{props.count}</h5></span></td>
        <td><button disabled={props.disable} onClick={()=>props.incrementProp(props.id)}   className="myBtn btn btn-secondary m-2"><h3>+</h3></button></td>
        <td><button disabled={props.disable}  onClick={()=>props.decrementProp(props.id)} className="myBtn btn btn-danger  m-2"><h3>-</h3></button></td>
            
        </div>
        </tr>
    )
}



export default  (CoinContainer)
