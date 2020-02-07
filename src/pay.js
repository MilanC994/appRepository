import React,{Component} from 'react'





class Pay extends Component  {

    constructor(props){
        super(props);
    }
    

    render(){
        return (
       
      <div> 
           <span className ="badge m-2 badge-secondary"><h5>Required To Pay: {this.props.toPay}</h5></span><br/>
           <input className="input-lg" onChange={this.handleEmailChange}  disabled={this.props.disable} ref='inputText' className='m-2' type='text' placeholder='Enter amount'/>
           <button className="btn-primary" disabled={this.props.disable} onClick={()=>{
               this.props.setPayed(this.refs.inputText.value);
               this.props.calculate();
           }}><h4>Pay</h4></button>
      </div>
      
    );
        }
 }




export default Pay