var name = ["oihane chou2rraut"];

for (var i=0;  i<name.length;  i++){
  if (name[i]> 0 && name[i]<10){
    console.log("Els noms de persones no contenen el número " + name[i]);
  }
  else if (name[i]== "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u") {
    console.log("He trobat la VOCAL " + name[i]);
  } else {
    console.log("He trobat la CONSONANT " + name[i]);
  }
}
