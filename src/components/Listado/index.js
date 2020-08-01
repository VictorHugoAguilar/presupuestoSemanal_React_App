import React from 'react';
// Importamos propTypes para documentar la aplicación
import PropTypes from 'prop-types';
// Importamos los componentes personalizados
import Gasto from '../Gasto';
// SFC
const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))
        }
        </div>
);
// PropType: Para Documentar la App
Listado.propType = {
    gastos : PropTypes.array.isRequired
}

export default Listado; 