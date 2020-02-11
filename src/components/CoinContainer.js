import React from 'react'


function CoinContainer(props) {
    
    
    return (
        <tr>
        <div className="container">
           
           <td> <span className ="badge m-2 badge-secondary"><h3>{props.value}</h3></span></td>
           <td><span className ="badge m-2 badge-secondary"><h3>{props.count}</h3></span></td>
            <td><button disabled={props.disable} onClick={()=>props.incrementProp(props.id)}   className=" btn btn-secondary m-2 btn-sm"><h3>+</h3></button></td>
            <td><button disabled={props.disable}  onClick={()=>props.decrementProp(props.id)} className="btn btn-danger btn-default m-2"><h3>-</h3></button></td>
            
            
        </div>
        </tr>
    )
}



export default  (CoinContainer)
