import { useCallback, useMemo } from 'react'
import { isEmpty } from 'ramda'
import useInputField from './useInputField'
import { validPayment } from '../../utils/validation'
import { calculateDiff } from '../../redux/coins/coinActions'

const usePay = (requiredToPay, calculate) => {
    const validatePayedAmount = useCallback(
        (payedAmount) => {
           return validPayment(requiredToPay, payedAmount)
        },
        [requiredToPay],
    )
    const { value: payed, setValue: setPayed, error: payedError, setError: setPayedError} = useInputField('', validatePayedAmount)
    const payButtonDisabled = useMemo(
        () => {
            return isEmpty(payed) || payedError !== false ? true : false   
        }
    )
    const onPayClick = useCallback(
        (value) => {
            setPayed('')
            setPayedError(null)
            calculate(value)
        },
        [calculate, setPayed, setPayedError],
    )
    return {
        payed,
        setPayed,
        payedError,
        onPayClick,
        payButtonDisabled
    }
}
export default usePay