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
    const { value: count, setValue: setCount, error: countInputError, setError: setCoinInputError } = useInputField('', validCount)
    const { value, setValue, error: valueInputError, setError: setValueInputError } = useInputField('', validValue)

    const disableSubmitButton = useMemo(() => {
        return  isNullOrEmpty(count) || isNullOrEmpty(value) || countInputError !== false || valueInputError !== false ? true : false
    }, [countInputError, valueInputError, count, value] )

    const dispatch = useDispatch()

    const coin = useMemo(() => {
         return { count, value } 
        }, [count, value])
    
    const handleAddCoinDialogClose = useCallback(() => {
        setValueInputError(null)
        setCoinInputError(null)
        setValue('')
        setCount('')
        handleCloseDialog()
    },[handleCloseDialog, setCoinInputError, setValueInputError, setValue, setCount])
    
    const addNewCoin = useCallback( () => {
        dispatch(addCoin(coin))
        handleAddCoinDialogClose()
        },[coin])
    
    return {
        setCount,
        setValue,
        countInputError,
        valueInputError,
        disableSubmitButton,
        addNewCoin,
        handleAddCoinDialogClose
    }
}
export default useAddCoinDialog