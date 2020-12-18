import { useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isEmpty, isNil } from 'ramda'
import useInputField from './useInputField'
import { validValue, validCount } from '../../utils/validation'
import {
    addCoin
  } from "../../redux/coins/coinActions"

  const isNullOrEmpty = value => {
    return isNil(value) || isEmpty(value) || value === 0 ? true : false
  }

const useAddCoinDialog = (handleCloseDialog) =>{
    
    const { valueField: countField, value:count, error: countInputError, clearState: clearCount } = useInputField('', validCount)
    const { valueField: valueField, value, error: valueInputError, clearState: clearValue } = useInputField('', validValue)

    const disableSubmitButton = useMemo(() => {
        return  isNullOrEmpty(count) || isNullOrEmpty(value) || countInputError !== false || valueInputError !== false ? true : false
    }, [countInputError, valueInputError, count, value] )

    const dispatch = useDispatch()

    const coin = useMemo(() => {
         return { count, value } 
        }, [count, value])
    
    const handleAddCoinDialogClose = useCallback(() => {
        clearCount()
        clearValue()
        handleCloseDialog()
    }, [clearCount, clearValue, handleCloseDialog])
    
    const addNewCoin = useCallback( () => {
        dispatch(addCoin(coin))
        handleAddCoinDialogClose()
        },[coin])
    
    return {
        valueField,
        countField,
        countInputError,
        valueInputError,
        disableSubmitButton,
        addNewCoin,
        handleAddCoinDialogClose
    }
}
export default useAddCoinDialog