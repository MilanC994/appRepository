import CoinContainer from './CoinContainer';
import React,{Component} from 'react'
import {connect} from 'react-redux'
import { incrementCoin, decrementCoin,calculateDiff,setPayed,setToPay } from '../redux/coins/coinActions'
import  Pay from '../pay'



class Coins extends Component {

 
  render() {
      
    
    return (
       <React.Fragment>
        <div > 
        <table style={{margin:"auto"}}>
            <tbody>
            {this.props.coinProp.map( coin=><CoinContainer key={coin.id} disable = {this.props.btnDisabled}   id={coin.id} value = {coin.value} decrementProp ={this.props.decrementProp} incrementProp = {this.props.incrementProp} count = {coin.count}/>)}
            </tbody>
       </table>
       <button className='btn-primary btn-success' disabled={this.props.btnDisabled} onClick={()=>this.props.setToPay()}><h2> Apply:</h2></button>
      
       <Pay toPay={this.props.getToPay} disable={this.props.dsblPay} calculate ={this.props.calculate} setPayed={this.props.setPayed} calculate ={this.props.calculate}/>
       <span className ="badge m-2 badge-secondary"><h5>{this.props.getOutputString}</h5></span>

      </div>
      

      </React.Fragment>      
      
    );

}


}

const mapStateToProps = state =>
{
    return{
        coinProp:state.coin,
        btnDisabled:state.buttonDIsabled,
        getToPay:state.toPay,
        getOutputString:state.outputString,
        dsblPay:state.disablePay
    }
}
const mapDispatchToProps = dispatch =>
{
    return{
        
        incrementProp:number=>dispatch(incrementCoin(number)),
        decrementProp:number=>dispatch(decrementCoin(number)),
        calculate:()=>dispatch(calculateDiff()),
        setPayed:number=>dispatch(setPayed(number)),
        setToPay:()=>dispatch(setToPay())
    }

    
}


export default connect(mapStateToProps,mapDispatchToProps)( Coins)