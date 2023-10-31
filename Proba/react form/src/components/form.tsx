import { useState } from 'react'
import '../../style.css'

function form() {

    const [FormValue, setFormValue] = useState(
        {
            email: '',
            pass: '',
            region: '',
            terms: false
        }
    )

    function getInputValue(event) {
        const target = event.target.name
        let value = event.target.value
        console.log(event);

        if (target === 'terms') value = event.target.checked

        setFormValue(
            {
                ...FormValue,
                [target]: value
            }
        )

    }

    return (
        <form onChange={getInputValue} onSubmit={(event) => event.preventDefault()}>
            <label> Correo electronico
                <input
                    type="text"
                    name="email"
                    // onChange={getInputValue}
                    className='my-2'
                />
            </label>
            <br />
            <label> Contraseña
                <input
                    type="password"
                    name="pass"
                    // onChange={getInputValue}
                    className='my-2'
                />
            </label>
            <br />
            <select name="region" className='my-2'>
                <option value="">Selecciona una opción...</option>
                <option value="mad">Madrid</option>
                <option value="bar">Barcelona</option>
                <option value="acor">A Coruña</option>
                <option value="zara">Zaragoza</option>
            </select>
            <br />
            <input type="checkbox" name="terms" />
            <h4>{JSON.stringify(FormValue)}</h4>
        </form>
    )
}

export default form