import {INCREMENT_COIN, DECREMENT_COIN,CALCULATE,SETTOPAY,SETPAYED} from './coinExport'

export const incrementCoin = (value=1) =>//default =1
{
    return{
        type: INCREMENT_COIN,
        payload:value
    }
}

export const  decrementCoin =value =>
{
  return{
      type: DECREMENT_COIN,
      payload:value
  }
}

export const calculateDiff =()=>
{
    return{
        type:CALCULATE,
        payload:5
    }
}
export const setPayed = value=>
{
    return{
        type:SETPAYED,
        payload:value
    }
}
export const setToPay =()=>
{
    return{
        type:SETTOPAY,
        payload:5
    }
}