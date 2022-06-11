//solução 1
function verificarPalindromo(string){
    if(!string) return;

    string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo(ovo));
