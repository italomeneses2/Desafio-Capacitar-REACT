import React from 'react';
import FlexboxHome from './FlexboxHome';

function Home() {
    const frases = [
        "Home",
        "Serviços",
        "Produtos",
        "Contatos"
    ];

    return (
        <FlexboxHome itens={frases} />
    );
}

export default Home;