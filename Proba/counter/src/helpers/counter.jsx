import React, { useState } from 'react'

function counter() {

    const initialvalue = 1
    const step = 1
    const maxValue = 10
    const minValue = 0

    const [Value, setValue] = useState(initialvalue)

    return (
        <>
            <h2>counter</h2>
            <span>{Value}</span>
            <button>+{step.toString}</button>
        </>
    )

}

export default counter