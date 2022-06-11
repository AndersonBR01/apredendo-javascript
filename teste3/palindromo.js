//solução 1
function verificrPalindromo(string){
    if(!string) return;

    string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(ovo));
