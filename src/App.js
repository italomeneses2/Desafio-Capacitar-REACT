import React from 'react';
import './App.css';
import Slogam from './components/Slogam';
import Home from './components/Home';
import Sobrenos from './components/Sobrenos';
import Depoimentos from './components/Depoimentos';
import Produtos from './components/Produtos';
import Meritos from './components/Meritos';
import Contato from './components/Contato';


function App() {

  return (
    <div>
      <div className="App">
        
        <h1>Camicia</h1>
        <Home />
        <Slogam />
        <Sobrenos />
        <Produtos />
        <Depoimentos />
        <Meritos />
        <Contato />
        
      </div>
    </div>
   
  )

}


export default App;
