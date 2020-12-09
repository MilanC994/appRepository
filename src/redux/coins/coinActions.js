import {
  INCREMENT_COIN,
  DECREMENT_COIN,
  CALCULATE,
  SET_AMOUNT_TO_PAY,
  ADD_COIN,
  REMOVE_COIN
} from "./coinExport";

export const incrementCoin = value => {
  return {
    type: INCREMENT_COIN,
    payload: value
  }
}

export const decrementCoin = value => {
  return {
    type: DECREMENT_COIN,
    payload: value
  }
}

export const calculateDiff = payedAmount => {
  return {
    type: CALCULATE,
    payload: payedAmount,
  }
}
export const setToPay = () => {
  return {
    type: SET_AMOUNT_TO_PAY
  }
}
export const addCoin = coin => {
  return{
    type: ADD_COIN,
    payload: coin
  }
}
export const removeCoin = coinValue => {
  return{
    type: REMOVE_COIN,
    payload: coinValue
  }
}
