import React from 'react';
// Importamos propTypes para documentar la aplicación
import PropTypes from 'prop-types';
// SFC
const Error = ({ mensaje }) => {
   return (
      <p className="alert alert-danger error">
         {mensaje}
      </p>
   );
}
// PropType: Para Documentar la App
Error.propType = {
   mensaje: PropTypes.string.isRequired
}

export default Error;