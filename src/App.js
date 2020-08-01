import React, { useState, useEffect } from 'react';
// Importamos los componentes personalizados
import Initial from './components/Initial/';
import Formulario from './components/Formulario/';
import Listado from './components/Listado/';
import ControlPresupuesto from './components/ControlPresupuesto/';
// SFC
function App() {
  // Definimos los state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showEstadoInicial, setShowEstadoInicial] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [addGasto, setAddGasto] = useState(false);

  // UseEffect actualiza el state restante
  useEffect(() => {
    if (addGasto) {
      // Agrega nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);
    }

    // Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);

    // Resetear el formulario
    setAddGasto(false);
  }, [gasto, gastos, addGasto]);

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
                      setGasto={setGasto}
                      setAddGasto={setAddGasto}
                    />

                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />

                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
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
