function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0; 
}

const meuArray = [1, 4, 5, 6, 10, 236, 1010, 203223, 58, 44, 88];

console.log(filtraPares(meuArray));