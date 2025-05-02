import React from 'react';
import FlexboxDep from './FlexboxDep';
import Flexbox from './Flexbox';

function Depoimentos() {
    const Depoimento = ["Depoimentos"]
    const nomes = ["Maria Silveira", "Rodrigo Pires", "João Cavalcante"]
    const frases = [
        "Amo as camisas! Macias, confortáveis e 100% algodão. Melhor ainda saber que são cruelty-free e produzidas no Brasil.",
        "As camisas são incríveis! O caimento é perfeito, o tecido é super macio e o estilo combina com tudo. Sem dúvida, minhas favoritas!",
        "Perfeitas para o dia a dia! Leves, sustentáveis e feitas com algodão puro. Adoro apoiar marcas que valorizam o bem-estar animal e o Brasil.",
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
            <h2><Flexbox itens={Depoimento} /></h2>
            <FlexboxDep itens={depoimentosFormatados} />
        </div>
    );
}

export default Depoimentos;