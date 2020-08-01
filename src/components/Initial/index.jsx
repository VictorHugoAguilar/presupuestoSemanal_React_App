import React, { Fragment } from 'react';


const Initial = () => {
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto inicial"
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
 
export default Initial;