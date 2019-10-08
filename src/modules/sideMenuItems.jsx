import React, { Component } from 'react';

const sideMenuItems = [
    { id: 1, categoria: "Lançamentos", imagem: "../img/123", itens: [null] },
    { id: 2, categoria: "Casa", imagem: "../img/123", itens: ["Banheiro", "Quartos", "Sala", "Quintal", "Cozinha"] },
    { id: 3, categoria: "Homens", imagem: "../img/123", itens: ["Bermudas", "Camisa", "Jaqueta"] },
    { id: 4, categoria: "Mulheres", imagem: "../img/123", itens: ["Vestidos", "Saias", "Sapatos"] },
    { id: 5, categoria: "Meninos", imagem: "../img/123", itens: ["Bola", "Brinquedos"] },
    { id: 6, categoria: "Meninas", imagem: "../img/123", itens: ["Bonecas", "Vestidos", "Sapatilhas"] }
];

class MenuItens extends Component {
    render() {
        return (
            <div id="sideMenuCards">
                {sideMenuItems.map(x =>
                    <div key={x.id}>
                        <h3>{x.categoria}</h3>
                        {x.itens.map(i => <p key={`${x.id}${i}`}>{i}</p>)}
                    </div>
                )}
            </div>
        );
    }
}

export default MenuItens;
