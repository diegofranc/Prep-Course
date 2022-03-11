// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var argumentos = Object.keys(objeto);
  var valores = Object.values(objeto);
  var matriz = [];
  for (let i=0;i<argumentos.length;i++){
   matriz[i] = [argumentos[i], +valores[i]];
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var letra = '';
var resp_obj = {};
var letrarep = '';


  for (let i=0;i<string.length;i++){
    letra = string[i];
    var cont =0;
    for (let j=0;j<string.length;j++){
      letrarep = string[j];
        if (letra == letrarep)
        cont = cont+1;
    }
 resp_obj[letra] = cont;
  
  }
return resp_obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var ss = '';
var letra = '';
var sss = '';
var letra2='';
for (let i=s.length-1;i>=0;i--){
  letra = s[i];
  if (letra==letra.toUpperCase())
  ss = s[i]+ss;
}
for (let j=0; j< s.length;j++){
  letra2 = s[j];
  if (letra2==letra2.toLowerCase())
  sss = sss+letra2;
}
return ss+sss;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var newstr = '';
  for (let i=0;i<str.length;i++){
    if (str[i]=' '){
      for (let j=i-1;str[j]!==' ';j--){
        newstr=newstr+str[j];
      }
      newstr=newstr+' ';
    }
  }
return newstr;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numstr = numero.toString(10);
  var reves = '';
  for (i=numstr.length-1;i>=0;i--){
   reves=reves+numstr[i];
  }
  if (reves==numstr)
  return 'Es capicua';
  else
  return'No es capicua';



}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var new_arr = cadena.replaceAll('a','');
  var new2_arr = new_arr.replaceAll('b',''); 
  var new3_arr = new2_arr.replaceAll('c',''); 
  return new3_arr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var newarr=arr;
for (let j=0;j<newarr.length-2;j++){
for (let i=0;i<newarr.length-2;i++){
  if (newarr[i].length>newarr[i+1].length){

{newarr[i+1]=newarr[i];
newarr[i]=newarr[i+1];

}
}
return newarr;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
 
var intersecci=[];
var intersecci2=[];

  for (let i=0;i<arreglo1.length;i++){
    for (let j=0;j<arreglo2.length;j++){
      if (arreglo1[i]==arreglo2[j])
      intersecci[i]=arreglo1[i];
       
      else
      continue
    }
  }
  
intersecci2 = intersecci.filter(function(elementos)
  {return elementos!==''});
    return (intersecci2);

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

