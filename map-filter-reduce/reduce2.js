const lista = [
    {
        name:'sabao em po',
        preço: 30,
    },
    {
        name: 'cereal',
        preço:12,
    },
    {
        name: 'toalha',
        preço: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo( saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preço;

    }, saldoDisponivel );
}

console.log(calculaSaldo(saldoDisponivel, lista))