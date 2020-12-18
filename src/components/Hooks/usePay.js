import { useCallback, useMemo } from 'react'
import { isEmpty } from 'ramda'
import useInputField from './useInputField'
import { validPayment } from '../../utils/validation'

const usePay = (requiredToPay, calculate) => {
    const validatePayedAmount = useCallback(
        (payedAmount) => {
           return validPayment(requiredToPay, payedAmount)
        },
        [requiredToPay],
    )

    const { valueField: payedField, value: payed, error: payedError, clearState:clearPayedState } = useInputField('', validatePayedAmount)
    const payButtonDisabled = useMemo(
        () => {
            return isEmpty(payed) || payedError !== false ? true : false   
        }
    )
    const onPayClick = useCallback(
        () => {
            calculate(payed)
            clearPayedState()

        },
        [payed, calculate, clearPayedState],
    )
    return {
        payedField,
        payedError,
        onPayClick,
        payButtonDisabled
    }
}
export default usePay