import React from 'react'


function CoinContainer(props) {
    
    
    return (
        <div className="container">
           <table style={{margin:"auto"}}>
            <tr>
           <td> <span className ="badge m-2 badge-secondary"><h2>{props.value}</h2></span></td>
           <td><span className ="badge m-2 badge-secondary"><h2>{props.count}</h2></span></td>
            <td><button disabled={props.disable} onClick={()=>props.incrementProp(props.id)}   className=" btn btn-secondary m-2 btn-sm"><h1>+</h1></button></td>
            <td><button disabled={props.disable}  onClick={()=>props.decrementProp(props.id)} className="btn btn-danger btn-default m-2"><h1>-</h1></button></td>
            </tr>
            </table>
        </div>
    )
}



export default  (CoinContainer)
