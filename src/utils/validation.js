import { isNil, isEmpty } from 'ramda'

const checkValue = value => {
    const valueRegex = /^\d+(.[0-9])?$/
    if(!isEmpty(value) && !(valueRegex.test(value)))
        return 'Invalid value acceptable formats are: 154 or 154.1'
    return true 
}


export const validValue = value => {
    if(isNil(value))
        return 'Value Must Not Be Null'
    if(+value > 1000)
        return 'Value must not be bigger than 1000'
    return checkValue(value)
}
export const validCount = count => {
    if(isNil(count)) return 'Count Must Not Be Empty'
    if( count % 1 !== 0)
        return 'Count must be a whole number'
    return true
}

export const validPayment = (requiredToPay, payed) => {
    if(+payed < +requiredToPay && !isEmpty(payed))
        return `Must Pay More Money than ${requiredToPay}`
    return checkValue(payed)

}