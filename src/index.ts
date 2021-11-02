/*let num:number[]= new Array (7)
num[0]= 20
num[1]= 14
num[2]= 8
num[3]= 0
num[4]= 5
num[5]= 19
num[6]= 24

let numeroDeseado = Number(prompt("Ingresar numero del 1 al 6"))

let indice = numeroDeseado - 1;
console.log("el numero es",num[indice])*/

/*let num: number[] = new Array(3));
let indice: number;

for (let i = 0; i < 3; i++) {
  //indice = Number(prompt("ingrese numero"))
  num[i] = indice;
}
for(let i = 0; i <  3; i++)
  console.log(num[i])*/

let dimension: number = Number(prompt("ingrese un numero"));
let personas: string[] = new Array(dimension);
let indice: number;

for (let indice = 0; indice < dimension; indice++) {
  personas[indice] = prompt("ingrese nombres en el lugar ");
}
for (indice = 0; indice < dimension; indice++) {
  console.log("la persona que ingreso en la posicion es: ");
}
