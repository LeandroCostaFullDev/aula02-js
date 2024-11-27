// let array4 = [
//     [1, 2, 3],    
//     [false, null, "Texto", ["Oi som", 2, true]], 
//     [42, "JavaScript"],     
//     [true, 7.5, "Final"]   
// ];

// Preciso que seja renderizado no console null do array
//Preciso que seja renderizado no console Oi som
//Preciso que seja renderizado Final no console

// console.log(array4[1][1])
// console.log(array4[1][3][0])
// console.log(array4[3][2])


// let carro = {
//     id: 1,
//     modelo:"Fusca",
//     ano:1979,
//     cor:"Amarelo"
// }

// console.log(`O carro ${carro.modelo} do ano ${carro.ano} já não paga mais IPVA`);

let carros = [
    { 
        id: 1,
        modelo: "Fusca",
        ano: 1979,
        cor: "Amarela"
    },
    { 
        id: 2,
        modelo: "Gol",
        ano: 1990,
        cor: "Azul"
    },
    { 
        id: 3,
        modelo: "Civic",
        ano: 2005,
        cor: "Preta"
    },
    { 
        id: 4,
        modelo: "Palio",
        ano: 2002,
        cor: "Vermelha"
    },
    { 
        id: 5,
        modelo: "Fiesta",
        ano: 2010,
        cor: "Branca"
    },
    { 
        id: 6,
        modelo: "Kangoo",
        ano: 2015,
        cor: "Prata"
    },
    { 
        id: 7,
        modelo: "Uno",
        ano: 1995,
        cor: "Verde"
    },
    { 
        id: 8,
        modelo: "Saveiro",
        ano: 2012,
        cor: "Preta"
    },
    { 
        id: 9,
        modelo: "Strada",
        ano: 2017,
        cor: "Branca"
    },
    { 
        id: 10,
        modelo: "Siena",
        ano: 2008,
        cor: "Cinza"
    }
];

//  Acesse o modelo do carro que tem o id 3 e exiba uma frase com seu nome.

// Acesse a cor do carro com o modelo "Fiesta" e crie uma frase informando a cor do carro.

//  Crie uma frase dizendo o ano do carro que tem o id 7

// Exiba o modelo e a cor do carro que foi fabricado em 2005.

//  Crie uma frase que diga o modelo e o ano do carro com id 10.

// Crie uma frase dizendo que o carro com o id 5 é branco e foi fabricado em 2010.

console.log(`O carro ${carros[2].modelo} é um bom modelo`)
console.log(`O carro ${carros[4].modelo} é de cor ${carros[4].cor}.`)
console.log(`O carro é do ano ${carros[6].ano}`)
console.log(carros[2].modelo, carros[2].cor)
console.log(`O carro ${carros[9].modelo}, se for do ano ${carros[9].ano}, não presta!`)
console.log(`Esse carro ${carros[4].modelo} é ${carros[4].cor} e foi fabricado em ${carros[4].ano}.`)
