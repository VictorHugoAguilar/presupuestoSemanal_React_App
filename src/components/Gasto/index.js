import React from 'react';
// Importamos propTypes para documentar la aplicación
import PropTypes from 'prop-types';
// SFC
const Gasto = ({gasto})=>(
    <li className="gastos">
        <p>{gasto.nombre}
            <span className="gasto">
                $ {gasto.cantidad}
            </span>
        </p>
    </li>
);
// PropType: Para Documentar la App
Gasto.propType = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;