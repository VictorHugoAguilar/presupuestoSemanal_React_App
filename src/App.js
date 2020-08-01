import React from 'react';

import Initial from './components/Initial';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Initial />
        </div>
      </header>
    </div>
  );
}

export default App;
