import React, { Fragment, useState } from 'react';
// Importamos propTypes para documentar la aplicación
import PropTypes from 'prop-types';
// Importamos los componentes personalizados
import Error from '../Error/';
// SFC
const Initial = ({setPresupuesto, setRestante, setShowEstadoInicial}) => {
    // Definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    // Leemos el valor inicial
    const setCantidadPresupuesto = (e) => {
        setCantidad(
            parseInt(e.target.value)
        )
    }
    // seteamos el presupuesto inicial
    const addPresupuesto = (e) => {
        e.preventDefault();
        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setError(false);
        // Si pasa la validación
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setShowEstadoInicial(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {
                error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null
            }

            <form
                onSubmit={addPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto inicial"
                    onChange={setCantidadPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto inicial"
                />
            </form>
        </Fragment>
    );
}
// PropType: Para Documentar la App
Initial.propType = {
    setPresupuesto: PropTypes.func.isRequired, 
    setRestante : PropTypes.func.isRequired, 
    setShowEstadoInicial: PropTypes.func.isRequired
}

export default Initial;