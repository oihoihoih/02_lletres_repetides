var letras = new Map()
    var palabra = ["o","i","h","a","n","e","c","h","o","u","r","r","r","a","u","t"];
    var number = 1;
    palabra.forEach(letter => {
        if (letras.has(letter) === false) {
            letras.set(letter, number)
        } else {
            //Obtengo el valor de cada letra para sumarle 1 por si se repite más de 1 vez
            letras.set(letter, (letras.get(letter)) + 1);
        }

    })
console.log(letras);
