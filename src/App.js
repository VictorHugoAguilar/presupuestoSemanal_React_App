import React, { useState } from 'react';
// Importamos los componentes personalizados
import Initial from './components/Initial/';
import Formulario from './components/Formulario/'

function App() {
  // Definimos los state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showEstadoInicial, setShowEstadoInicial] = useState(true);
  const [ gastos, setGastos ] = useState([]);

  // Añadimos un nuevo gasto
  const addNuevoGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            showEstadoInicial ?
              (
                <Initial
                  setPresupuesto={setPresupuesto}
                  setRestante={setRestante}
                  setShowEstadoInicial={setShowEstadoInicial}
                />
              ) : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      addNuevoGasto={addNuevoGasto}
                    />

                  </div>
                  <div className="one-half column">
                    2
                </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
