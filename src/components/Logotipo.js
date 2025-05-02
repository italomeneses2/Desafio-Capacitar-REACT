import React from 'react';
import logotipo from './logotipo.jpg';
import Flexbox from './Flexbox';

const App = () => {
  const frases = [
    <img src={logotipo} alt="Logotipo" style={{ width: '80px', height: 'auto' }} />,
    <h1>Camicia</h1>
    
  ];

  return <Flexbox itens={frases} />;
};

export default App;