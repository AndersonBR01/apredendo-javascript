/*function soma(a, b) {
    console.log("hello word!!")
    return a + b; //8
}

soma (3, 5) ;*/

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++ ){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log('os numeros pares são:' , evenNums);
}

let array = [1,2,3,4,5,7,8];

returnEvenValues(array);


