import React from 'react';
import Flexbox from './Flexbox'; 

function Slogam() {
    const frases = [
        "100% algodão",
        "Nenhum animal foi maltratado na produção destes produtos",
        "Produtos brasileiros"
    ];

    return (
        
       <Flexbox itens={frases} />  
        
    );
}

export default Slogam;