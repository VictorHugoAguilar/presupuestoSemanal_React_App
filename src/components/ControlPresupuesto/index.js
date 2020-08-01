import React, { Fragment} from 'react';
// Importamos propTypes para documentar la aplicación
import PropTypes from 'prop-types';
// Importamos los helpers
import { revisarPresupuesto } from '../../Helpers';
// SFC
const ControlPresupuesto = ({presupuesto, restante}) => {
    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ { presupuesto }
            </div>
            <div className={ revisarPresupuesto(presupuesto, restante) } >
                Restante: $ { restante }
            </div>
        </Fragment>
    );
}
// PropType: Para Documentar la App
ControlPresupuesto.propType = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;