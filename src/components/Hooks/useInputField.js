import React, { useState, useCallback } from 'react'
import _ from 'lodash'

const INPUT_DEBOUNCE_TIME = 500
const useInputField = (defaultValue, validateFn = null) => {
    const [value, setInputValue] = useState(defaultValue)
    const [error, setError] = useState(null)


    const setInputError =useCallback( _.debounce( error => {
        setError(error)
      },INPUT_DEBOUNCE_TIME),[])

    const setValue = (value) => {
        if(validateFn !== null){
            const validate =  validateFn(value)
            validate === true ? setInputError(false) : setInputError(validate)
        }
        setInputValue(value)
    }
    return { value, setValue, error, setError }
}

export default useInputField