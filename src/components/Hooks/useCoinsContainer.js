import React, { useCallback, useState, useMemo, useEffect } from 'react'
import useInputField from './useInputField'
import { useDispatch, useSelector } from "react-redux";
import {
    incrementCoin,
    decrementCoin,
    calculateDiff,
    setToPay,
    addCoin,
    removeCoin
  } from "../../redux/coins/coinActions"
  
  
   const useCoinsContainer = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const toggleAddCoinDialog = useCallback(() =>{
       setIsDialogOpen(!isDialogOpen)
    },[isDialogOpen])
    const getCoins = state => state.coins
    const coins = useSelector(getCoins)
    
    const getSetterButtonsStatus = state => state.setterButtonsDisabled
    const setterButtonsStatus = useSelector(getSetterButtonsStatus)
    
    const getToPay = state => state.toPay
    const toPay = useSelector(getToPay)
    
    const getOutputString = state => state.outputString
    const outputString = useSelector(getOutputString)
    
    const getPayButtonStatus = state => state.payButtonDisabled
    const payButtonStatus = useSelector(getPayButtonStatus)

    const dispatch = useDispatch()
    
    const coinIncrement = useCallback( value => {
         dispatch(incrementCoin(value))
      },[])

    const coinDecrement = useCallback( value => {
         dispatch(decrementCoin(value))
      },[])

    const calculate = useCallback( (payedAmount) => {
         dispatch(calculateDiff(payedAmount))
      },[])

    const setToPayAmount = useCallback( () => {
         dispatch(setToPay())
      },[])

    const deleteCoin = useCallback( coinValue => {
        dispatch(removeCoin(coinValue))
     },[/* value ?*/])

     return {
        isDialogOpen,
        toggleAddCoinDialog,
        coins,
        setterButtonsStatus,
        toPay,
        outputString,
        payButtonStatus,
        coinIncrement,
        coinDecrement,
        calculate,
        setToPayAmount,
        deleteCoin
    }
  }
  export default useCoinsContainer
  