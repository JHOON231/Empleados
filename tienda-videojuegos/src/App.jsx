import React, { useState } from 'react';
import dataVideojuegos from './data/videojuegos';
import TablaVideojuegos from './components/TablaVideojuegos';

function App() {
  // Cargamos los datos ficticios en un estado local como pide el taller
  const [videojuegos, setVideojuegos] = useState(dataVideojuegos);

  return (
    <div>
      {/* Pasamos los datos mediante props al componente de presentación */}
      <TablaVideojuegos videojuegos={videojuegos} />
    </div>
  );
}

export default App;