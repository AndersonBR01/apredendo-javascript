function somaNumeros(arry){
    return arry.reduce(function(prev, current) {
        return prev + current;
    })
}

const arry = [1, 2];

console.log(somaNumeros(arry));