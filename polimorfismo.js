//Criando uma classe base
class animal{
constructor(nome, cor){
    this.nome = nome;
    this.cor = cor;
}

falar (){
    return `Olá, meu nome é ${this.nome}.`;
}
}

// Criando uma classe derivada de animal
class Cachorro  extends animal {
constructor(nome, cor, raça){
    super(nome, cor);
    this.raça = raça;
}
latir(){
    return `Au au`
}
}

//Criando uma classe derivada de Animal
class Gato extends animal{
    constructor(nome, cor, raça){
        super(nome, cor);
        this.raça = raça;
    }


miar () {
    return `Miau!`
}
}

//Criando um array de animais
const animais = [
    new Cachorro('rex', 'Marrom', 'Dog'),
    new Gato('Ratinho', 'Carvão', 'Nuvem'),
];

//Percorrendo o array e imprimindo o nome e a cor de cada animal
for (const animal of animais) {
    console.log(`O animal "${animal.nome}" é ${animal.cor}`);
}

//Chamando o método "falar()" em cada animal
for(const animal of animais) {
 console.log(animal.falar());
}

// Chamando método "latir()" no cachorro
const cachorro = animais[0];
console.log(cachorro.latir());

// Chamando o método "miar()" no gato
const gato = animais[1];
console.log(gato.miar());