import React, { Component } from 'react';

const sideMenuItems = [
    { pos: false, id: 1, categoria: "Lançamentos", imagem: "../img/123", itens: [null] },
    { pos: false, id: 2, categoria: "Casa", imagem: "../img/123", itens: ["Banheiro", "Quartos", "Sala", "Quintal", "Cozinha"] },
    { pos: false, id: 3, categoria: "Homens", imagem: "../img/123", itens: ["Bermudas", "Camisa", "Jaqueta"] },
    { pos: false, id: 4, categoria: "Mulheres", imagem: "../img/123", itens: ["Vestidos", "Saias", "Sapatos"] },
    { pos: false, id: 5, categoria: "Meninos", imagem: "../img/123", itens: ["Bola", "Brinquedos"] },
    { pos: false, id: 6, categoria: "Meninas", imagem: "../img/123", itens: ["Bonecas", "Vestidos", "Sapatilhas"] }
];

class MenuItens extends Component {

    render() {
        return (
            <div id="sideMenuCards">
                {sideMenuItems.map(x =>
                    <div onClick={this.openCard} id={x.id} key={x.id}>
                        <h3 id={x.id}>{x.categoria}</h3>
                        {sideMenuItems[x.target.id - 1].pos === true ? console.log(true) : console.log(false)}
                    </div>
                )}
            </div>
        );
    }

    openCard(x) {
        if (sideMenuItems[x.target.id - 1].pos === false) {
            sideMenuItems[x.target.id - 1].pos = true;
        } else {
            sideMenuItems[x.target.id - 1].pos = false;
        }
    }
}

export default MenuItens;
// x.itens.map(i => <p key={`${x.id}${i}`}>{i}</p>)
