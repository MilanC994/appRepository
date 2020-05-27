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

    if(sumOfAllCoins>=state.difference)
    {return true}
    return false
}

function doStaff(state){

    if(!checkIfThereAreEnoughCoins(state)){
        return {...state,
            outputString:"No Enough Coins To Return The Chamge",
            buttonDIsabled:true,
            disablePay:false
        }
    }
    
    let finalState = {
        ...state,
        numOfCoinsUsed:99999
    }

    let pomState={...state,
                numOfCoinsUsed:0
            }
    
        let redoIndex =0;
        let limit=0;

       //Calculating using modified greedy algorithm
       //take one index, first max number of times, then max-1, max-2..
       //compare number of coins used in each calculation and save the lowest
        while(redoIndex<pomState.coin.length){                                              

            if(pomState.coin[redoIndex].value>pomState.difference)                         
                redoIndex++;
            
            let maxNum = Math.floor(pomState.difference/pomState.coin[redoIndex].value)   
            let deduct = maxNum-limit;                                                    
            
             deduct = deduct>pomState.coin[redoIndex].count ? pomState.coin[redoIndex].count : deduct
                
            if(deduct>0){                                   
                pomState=produce(pomState,draft => {
                    draft.difference = ((draft.difference - (draft.coin[redoIndex].value * deduct )) + 0.001).toFixed(1)
                    draft.coin[redoIndex].count-=deduct                                                                 
                    draft.numOfCoinsUsed+= deduct                                                                    
                    draft.outputString=""

                })
                
                pomState=calculate(pomState,0,redoIndex) 
                   
                if(pomState.numOfCoinsUsed<finalState.numOfCoinsUsed) 
                        finalState={...pomState}
                
                pomState={...state,
                            numOfCoinsUsed:0
                        }
                
                limit++;                                  
            
            }
            else{
                redoIndex++;
            }
        
        }

       if(finalState.outputString==="Not Possible to return change"){
            
            return {...state,
                    outputString:"Not Possible to return change"
                }
            }
        return finalState

}

function calculate(state, index,skipIndex){

    


    if(index===skipIndex)
        index++;

    if(state.difference==0){
        

        return {...state,
            outputString:"Accepted"
        }
    }
    
    if( index>5 && state.difference != 0 )
    {
        return {...state,
                outputString:"Not Possible to return change",
                numOfCoinsUsed:999
            }
    }
    

    const deductFromCoinsCount = Math.floor(state.difference/state.coin[index].value) 
    
    
    if(deductFromCoinsCount>0 && state.coin[index].count>=deductFromCoinsCount ){ 
        
        state = produce(state,draft=>{
            draft.difference = ((draft.difference - (state.coin[index].value * deductFromCoinsCount )) + 0.001).toFixed(1)
            draft.coin[index].count-=deductFromCoinsCount 
            draft.numOfCoinsUsed+= deductFromCoinsCount
            draft.outputString=""
        })
        return calculate(state,index+1,skipIndex)
    }
    if(deductFromCoinsCount>0 && state.coin[index].count<deductFromCoinsCount){
        state = produce(state,draft=>{
            draft.difference = ((draft.difference - (state.coin[index].value * state.coin[index].count)) + 0.001).toFixed(1)
            draft.coin[index].count=0
            draft.numOfCoinsUsed+= draft.coin[index].count
            draft.outputString=""
        })
        return calculate(state,index+1, skipIndex)
    }

    if(state.difference<state.coin[index].value || state.coin[index].count<1){
        return calculate(state,index+1, skipIndex)
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
        
    
    else return state
}
function setPayedAmount(state,action)
{
    var result = Number(action.payload-state.toPay).toFixed(1); 
    
    if(result>0)
    { 
       return produce(state, draft=>{
        draft.payed = action.payload
        draft.difference=Number(action.payload-draft.toPay).toFixed(1)
        draft.disablePay=true;
        draft.buttonDIsabled=false;
        draft.outputString=''
        })
        
    }
    else if(result==0)
    {
       return produce(state, draft=>{
        draft.difference=0
        draft.disablePay=true;
        draft.buttonDIsabled=false;
        draft.outputString='Accepted'
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
                    
                  return doStaff(state)
                    
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