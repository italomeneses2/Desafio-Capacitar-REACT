import React from 'react';
import FlexboxDep from './FlexboxDep';

function Depoimentos() {
    
    const nomes = ["+100", "+20", "97%"]
    const frases = [
        "Produtos disponíveis",
        "Anos de experiência no mercado",
        "De satisfação dos clientes",
    ];

    const depoimentosFormatados = frases.map((frase, index) => (
        <>
            <strong>{nomes[index]}</strong>
            <br />
            {frase}
        </>
    ));

    return (
        <div>
            
            <FlexboxDep itens={depoimentosFormatados} />
        </div>
    );
}

export default Depoimentos;