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
    disablePay:true,
    numOfCoinsUsed:0
}

function checkIfThereAreEnoughCoins(state)
{
    let sumOfAllCoins=0
    for(let i=0;i<state.coin.length;i++)
    {
        sumOfAllCoins+=(state.coin[i].count*state.coin[i].value)
    }

    if(sumOfAllCoins>state.difference)
    {return true}
    return false
}


function doIt(state, stateIfOutOfCoins) 
{
    if(checkIfThereAreEnoughCoins(state)==false)
    {
        state={...state,
        outputString:"No Enough Coins to Return Change: "+state.difference,
        buttonDIsabled:true,
        disablePay:false
    }
            return state;
    }
    
    else if(state.difference==0)
    {
        return state
    }
    
    let pomState = {...state,
    numOfCoinsUsed:9999
    }
    let multiplyFactor = 1;
    let limit,pomLimit
    for(let k=0;k<state.coin.length-1;k++)
    {
        limit=Math.floor((state.difference/state.coin[k].value)+0.001)
        pomLimit=limit

        while(state.coin[k].count!=0 && limit>0)
    {
        
    for(let i = 0; i<state.coin.length;i++)
    {
       
        if(i==k)
        {i++}
            while(state.coin[k].count!=0 && pomLimit>0 && state.difference>=state.coin[k].value)
            {
                    
                    state =  produce(state, draft=>{
                    draft.coin[k].count-=1
                    draft.difference-=state.coin[k].value
                    draft.difference= Number(draft.difference).toFixed(1)
                    draft.numOfCoinsUsed+=1
                  
                    pomLimit--
                  
                })
                if(state.numOfCoinsUsed>pomState.numOfCoinsUsed)
                    break;
            }
         
        while(state.coin[i].count!=0 && state.difference>=state.coin[i].value)
        {
            
                state =  produce(state, draft=>{
                draft.coin[i].count-=1
                draft.difference-=state.coin[i].value
                draft.difference= Number(draft.difference).toFixed(1)
                draft.numOfCoinsUsed+=1
                
            })
            if(state.numOfCoinsUsed>pomState.numOfCoinsUsed)
                    break;
        }
 
    
    }
    if(state.difference==0 && state.numOfCoinsUsed<pomState.numOfCoinsUsed)
        {
   
            pomState={...state,
            outputString:"Accelpted !"}
           
        }
        
        state={...stateIfOutOfCoins}
   
    
   limit--
   pomLimit=limit;
   
}

}
    
    if(pomState.difference!=0)
    {
        pomState={...stateIfOutOfCoins,
        outputString:"No Enough coins to return change",
        buttonDIsabled:true,
        disablePay:false
        }
    }
    return pomState;
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
                    return     doIt(state,state)
                    
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