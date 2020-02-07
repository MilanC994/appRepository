import {INCREMENT_COIN, DECREMENT_COIN,CALCULATE,SETTOPAY,SETPAYED} from './coinExport'
import produce from 'immer'



const initialState = {
    coin:[{id:0,value:5.0, count : 10},
        {id:1,value:2.0, count : 10},
        {id:2,value:1.0, count : 10},
        {id:3,value:0.50, count : 10},
        {id:4,value:0.20, count : 10},
        {id:5,value:0.10, count : 10}
    ],
    toPay:0,
    payed:0,
    difference:0,
    outputString:'',
    buttonDIsabled:false,
    disablePay:true
}


function reduction(state,stateIfOutOfCoins,ind)
{
    if(ind>state.coin.length-1 && state.difference!=0)
    {
    return produce(stateIfOutOfCoins, draft=>{
        draft.outputString='No enough coins to return change, please input less money ! Change:'+draft.difference
        draft.disablePay=false;
        draft.buttonDIsabled=true;
    })
    
    }
    else if(state.difference==0){
       if(state.outputString.length==0)
       {
        return {...state,
        outputString:'Accepted !'
        };}
        return state

    }
        
   if( state.coin[ind].count!=0 && state.difference>=state.coin[ind].value) 
   {
        console.log(state.difference, state.coin[ind].value, state.difference-state.coin[ind].value)   
       return  reduction((produce(state, draft=>{
        draft.coin[ind].count-=1
        draft.difference-=state.coin[ind].value
        draft.difference= Number(draft.difference).toFixed(1)
    })),stateIfOutOfCoins,ind)
    }
    else if(state.coin[ind].count==0 || (state.difference<state.coin[ind].value))
    {
        return reduction(state,stateIfOutOfCoins,ind+1)
    }
   
    
}

function incrCoin(state = initialState,action)
{
    
  return   produce(state, draft=>{
    draft.coin[action.payload].count+=1

  
})  
}
function decrCoin(state , action)
{
    if(state.coin[action.payload].count>0)
    {
  return   produce(state, draft=>{
         draft.coin[action.payload].count-=1
       
    })
  }
        
    
    else {return state}
}
function setPayedAmount(state,action)
{
    if(action.payload-state.toPay>=0)
    { 
        console.log(action.payload +" JE VECE OD "+state.toPay)
       return produce(state, draft=>{
        draft.payed = action.payload
        draft.difference=Number(action.payload-draft.toPay).toFixed(1)
        draft.disablePay=true;
        draft.buttonDIsabled=false;
        draft.outputString=''
        })
        
    }
    else
    {
        console.log("U ELSE")
        return produce(state,draft=>{
            draft.outputString='You need to pay more money, input correct amount !'
            draft.difference=0;
        })
    }

}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


const coinReducer = (state = initialState,action)=>
{
    //from : https://daveceddia.com/react-redux-immutability-guide/#redux-add-an-item-to-an-array
    switch(action.type)
    {
        
        case INCREMENT_COIN:
            {

                return incrCoin(state,action)
                
                
            }
         case DECREMENT_COIN:
            {
                        
                return  decrCoin(state,action)
                
            }
                    
        case CALCULATE:
            {
                    console.log(state.difference+"  RAZLIKA")
                    return     reduction(state,state,0)
                    
            }
        case SETPAYED:
            {
                return setPayedAmount(state,action)
                
            }
                    
        case SETTOPAY:
            {
                return produce(state, draft=>{
                    draft.toPay =Number(randomIntFromInterval(100,300)*0.1).toFixed(1)
                    draft.buttonDIsabled=true;
                    draft.disablePay=false;


                })
                    
            }
        
        
        default: return state
      
    }
}

export default coinReducer