/*const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Anderson',
        nota: 4,
        turma: '3A',
    },
];
function alunosAprovados(arry, media){
    let aprovados = [];
    for(let i = 0; i < arry.length; i++){

        const {nota, nome} = arry[i];

        if(nota >= media){
            aprovados.push(nome);
        }

    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 2));

*/
function calculaIdade(anos){
    return`Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30.
};

const pessoa2 = {
    nome: 'carla',
    idade: 30,
};

const animal = {
    nome: 'fiona',
    idade: 5,
    raça: 'pug',
};
/*console.log(calculaIdade.apply(animal, [9]));*/
/*console.log(calculaIdade.call(animal, [9]));*/