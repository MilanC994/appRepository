import React, { useState } from 'react'
//TODO- add required option
const useInputField = defaultValue => {
    const [value, setValue] = useState(defaultValue)
    return { value, setValue }
}

export default useInputField
