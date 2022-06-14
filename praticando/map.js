function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === "Admin"){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios =new Map();

usuarios.set('Anderson', 'Admin');
usuarios.set('Luana', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Pyetro', 'Admin');

console.log(getAdmins(usuarios))