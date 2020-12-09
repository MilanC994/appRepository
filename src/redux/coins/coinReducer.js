import {
  INCREMENT_COIN,
  DECREMENT_COIN,
  CALCULATE,
  SET_AMOUNT_TO_PAY,
  ADD_COIN,
  REMOVE_COIN
} from "./coinExport"
import { sort } from 'ramda'

const initialState = {
  coins: [
    { value: 5, count: 10 },    
    { value: 2, count: 10 },
    { value: 1, count: 10 },
    { value: 0.5, count: 10 },
    { value: 0.2, count: 10 },
    { value: 0.1, count: 10 },
  ],
  toPay: 0,
  outputString: "",
  setterButtonsDisabled: false,
  payButtonDisabled: true
};

function incrCoin(state = initialState, action) {
  return {
    ...state,
    coins: [
      ...state.coins.map(c =>  c.value === action.payload ?  {...c, count: c.count + 1 } : c )
    ]
  }
}
function decrCoin(state, action) {
  return {
    ...state,
    coins: [
      ...state.coins.map(c =>  c.value === action.payload && c.count > 0 ? {...c, count: c.count - 1 } : c )
    ]
  }
}
const addCoin = (state, newCoin) => {
  if(! newCoin.value)
    return{
      ...state,
      outputString: "Value must be higher than 0"
    }
  const alreadyExists = state.coins.find(coin => coin.value === newCoin.value)
  if(alreadyExists){
    return {
      ...state,
      coins:[
        ...state.coins.map(coin => coin.value !== newCoin.value ?  coin : { ...coin, count: coin.count + newCoin.count})
      ]
    }
  }
  
  const byValue = function(a, b) { return b.value - a.value }
  return {
    ...state,
    coins: sort(byValue,[...state.coins, newCoin])
  }
  return state
}
const updateCoins = (state, solution, amount) => {
const regex = /(\[)|(\])|({)|(")|({)|(})/g
  return {
    ...state,
    coins:[
      ...state.coins.map(coin => {
        const cointToUpdate = solution.find(c => c.value === coin.value)
        return cointToUpdate ? { ...coin, count: coin.count - cointToUpdate.count } : coin
      })
    ],
    outputString: JSON.stringify(solution).replace(regex, ' ') + ' = ' + amount,
    payButtonDisabled: true,
    setterButtonsDisabled: false
  }

}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const calculateChange = (state, payedAmount) => {
  const { coins, toPay } = state
  const amount = Number(payedAmount - toPay).toFixed(1);
  let minCount = null
  const recurse = (amount, index, coinCount) => {

    if(minCount && coinCount >= minCount)
      return null
    
    if(amount == 0){
      if(minCount == null || coinCount < minCount){
        minCount = coinCount
        return [] //success
      }
      return null //nonOptimal
    }
    if(index >= coins.length)
      return null // failure
    let bestChange = null
    const coin = coins[index]
    
    const canUse = Math.min(Math.floor((amount/coin.value).toFixed(1)), coin.count)
    for(let count = canUse; count>=0; count --){
      let change = recurse((amount - coin.value * count).toFixed(1), index + 1, coinCount + count)
      if(change != null){
        if(count){
          change && change.push({ value: coin.value, count })
        }
        bestChange = change

      }
      if(index === coins.length -1)
        break
    }
    return bestChange
  }
  if(amount >= 0){
    const result = recurse(amount, 0, 0)
    return  result ? updateCoins(state, result, amount) : { ...state, outputString:"Not Possible"}
  }
  return{ ...state, outputString:"You need to pay more money"}


}

const removeCoin = (state, coinValue) =>{
  return{
    ...state,
    coins: [
      ...state.coins.filter(coin => coin.value !==coinValue)
    ]
  }
}
const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COIN: 
      return incrCoin(state, action);
    
    case DECREMENT_COIN:
      return decrCoin(state, action);
    
    case CALCULATE: 
      return calculateChange(state, action.payload)

    case SET_AMOUNT_TO_PAY: 
      return {
        ...state,
        toPay: Number(randomIntFromInterval(100, 300) * 0.1).toFixed(1),
        setterButtonsDisabled: true,
        payButtonDisabled: false
    }

    case ADD_COIN: 
      return addCoin(state, action.payload)
    
    case REMOVE_COIN:
      return removeCoin(state, action.payload)

    default:
      return state;
  }
};

export default coinReducer