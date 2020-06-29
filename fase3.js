var myName = ["o","i","h","a","n","e","c","h","o","u","r","r","a","u","t"];


var listaLetras = myName.map(function(letra) {
    let nro = 0;
    for (let i = 0;  i<myName.length;  i++){
        // Con este bucle busco cuántas veces se repite una letra
        if (letra == myName[i]) {
            nro ++;
            if (nro > 1) {
                /*con este método consigo eliminar las letras a partir de la primera duplicada*/
                myName.splice(i,1);
            }
        }
    }
    return (letra + ": " + nro);
});

console.log(listaLetras);
