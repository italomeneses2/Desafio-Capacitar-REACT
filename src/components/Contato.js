import React from 'react';
import Flexbox from './Flexbox';

function Contato() {
    const frases = [
        "Telefone: (11) 99999-9999",
        "E-mail: camicia.camisas@gmail.com"
    ];

    return (
        
       <Flexbox itens={frases} />
        
    );
}

export default Contato;