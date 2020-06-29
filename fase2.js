var name = ["oihane"+"chou2r,raut"];
var consonante = "bcdfghjklmnñpqrstvwxyz";
//Defino así las consontantes porque es más fácil definir consonantes que signos
var vocal = "aeiou";

// He añadido una función para que detecte otros signos además de números

for (var i=0;  i<name.length;  i++){

    if (vocal.indexOf(name[i]) != -1 && isNaN(name[i])) {
        console.log ("He trobat la VOCAL " + name[i]);
    } else if (consonante.indexOf(name[i])  != -1 && isNaN(name[i])) {
        console.log ("He trobat la CONSONANT " + name[i]);
    } else if (isNaN(name[i])) {
        console.log ("Els noms de persones no contenen signes com " + name[i]);
    } else {
        console.log("Els noms de persones no contenen el número " + name[i]);
    }
}
/*
PRIMERA PRUEBA
  if (name[i]> 0 && name[i]<10 && isNaN(name[i])){
    console.log("Els noms de persones no contenen el número " + name[i]);
  }
  else if (name[i]== "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u") {
    console.log("He trobat la VOCAL " + name[i]);
  } else {
    console.log("He trobat la CONSONANT " + name[i]);
  }
*/
