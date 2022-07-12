/* Existen números enteros cuya suma de sus divisores propios positivos dan el mismo número, por ejemplo, el número 6 sus divisores son
   1, 2 y 3; y 6 = 1+2+3. Los siguientes números presentan el mismo comportamiento 28, 496, 8128:
   
   28 = 1 + 2 + 4 + 7 + 14
   496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248
   8128 = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 127 + 254 + 508 + 1016 + 2032 + 4064
   
   Con base a la explicación anterior, captura un número entero positivo, y con ayuda de una función recursiva (el cual reciba máximo dos parámetros), determine lo
   antes explicado y regrese un valor para mostrar por pantalla: SI son igual o NO son iguales (Valor 10 puntos).
   Matrícula y Nombre del alumno: 2021030262 | Qui Mora Angel Ernesto
*/

const buttonNumber = () => {
  n = document.getElementById("input-number").value;
  console.log(n);
  main();
}

const buttonNumber2 = () => {
  n = document.getElementById("input-number2").value;
  console.log(n);
  main();
}

const divisorSin = (n, i) => {
  sum = 0;
  for (i = 1; i < n; i++)
    if (n % i == 0)
      sum += i;
    if (sum == n)
      document.getElementById("main-text").innerHTML = `${n} SÍ cumple la condición.`;
    else 
      document.getElementById("main-text").innerHTML = `${n} NO cumple la condición.`;
  sum = 0;
}

const divisor = (n, i) => {
  if (i == n)
    return 0;
  else if (n % i == 0)
    return i + divisor(n, i+1)
  else
    return divisor(n, i+1)
}

const menu = () => {

}

function main() {
  if(divisor(n, 1) == n)
    document.getElementById("main-text").innerHTML = `${n} SÍ cumple la condición.`;
  else
    document.getElementById("main-text").innerHTML = `${n} NO cumple la condición.`;
}

const rickRoll = new Audio("./src/neverGonnaGiveYouUp.mp3");