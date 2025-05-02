
import React from 'react';
import FlexboxDep from './FlexboxDep';
import Flexbox from './Flexbox';
import camicia1 from './camicia1.jpg';
import camicia2 from './camicia2.jpg';
import camicia3 from './camicia3.jpg';
import './Produtos.css';

function Produtos() {
    const Produto = ["Produtos"];
    const nomes = ["Camisa Slim Fit", "Camisa Regular Fit", "Camisa Executive Fit"];
    const descricoes = [
        "R$79,90",
        "R$69,90",
        "R$139,90"
    ];
    
    // Modifica as imagens para usar a classe camiseta-padrao
    const imagens = [
        <img src={camicia1} alt="Camiseta 1" className="camiseta-padrao" />,
        <img src={camicia2} alt="Camiseta 2" className="camiseta-padrao" />,
        <img src={camicia3} alt="Camiseta 3" className="camiseta-padrao" />
    ];

    // Combinando nomes, imagens e descrições
    const itensProdutos = imagens.map((imagem, index) => (
        <div key={index} className="item-com-imagem">
            <div className="nome-cliente">{nomes[index]}</div>
            {imagem}
            <p className="descricao-produto">{descricoes[index]}</p>
        </div>
    ));

    return (
        <div className="produtos-section">
            <h2><Flexbox itens={Produto} /></h2>
            <FlexboxDep itens={itensProdutos} />
        </div>
    );
}

export default Produtos;