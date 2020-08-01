import React, { useState } from 'react';
import shortid from 'shortid';
// Importamos los componentes personalizados
import Error from '../Error/';

const Formulario = ({addNuevoGasto}) => {
    // Definir el state
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [ error, setError ] = useState(false);

    // Agregamos gastos
    const addGastos = (e) => {
        e.preventDefault();
        // validar
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        // construir el gasto
        const gasto = {
            id: shortid.generate(),
            nombre: nombre,
            cantidad: cantidad
        }
        // Pasar el gasto al componente principal
        addNuevoGasto(gasto);
        // resetear el form
        resetForm();
    }

    const resetForm = () => {
        setNombre('');
        setCantidad(0);
        return;
    }

    return (
        <form
            onSubmit={ addGastos }
        >
            <h2>Agregar tus datos aquí</h2>
            {
                error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null 
            }
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}
export default Formulario;