import { useState, useCallback } from 'react'
import _ from 'lodash'

const INPUT_DEBOUNCE_TIME = 500
const useInputField = (defaultValue, validateFn = null) => {
    const [value, setInputValue] = useState(defaultValue)
    const [error, setError] = useState(null)


    const setInputError =useCallback( _.debounce( error => {
        setError(error)
      },INPUT_DEBOUNCE_TIME),[])

    const onChange = useCallback(e => {
        const value = +e.target.value
        if(validateFn !== null){
            const validate =  validateFn(value)
            validate === true ? setInputError(false) : setInputError(validate)
        }
        setInputValue(value)
    },[validateFn, setInputError, setInputValue])

    const clearState = useCallback(() => {
        setInputValue('')
        setError(null)
    }, [setInputValue, setError])

    const valueField = { value, onChange }
    return { valueField, value, error, clearState }
}

export default useInputField
