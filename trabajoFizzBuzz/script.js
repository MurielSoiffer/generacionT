function fizzBuzzDos(max, f, b, f_num, b_num) {
  let res = [];

  for (let i = 1; i <= max; i++) {
    if (i % f_num === 0 && i % b_num === 0) {
      res.push(f + b);
    } else if (i % f_num === 0) {
      res.push(f);
    } else if (i % b_num === 0) {
      res.push(b);
    } else {
      res.push(i.toString());
    }
  }
  return res.join(", ");
}
let maximo = prompt("ingrese el numero maximo del fizzbuzz")
let fizz = prompt("ingrese la primera palabra del fizzbuzz")
let buzz = prompt("ingrese la segunda palabra del fizzbuzz")
let fizz_n = prompt("ingrese el primer numero a tener en cuenta")
let buzz_n = prompt("ingrese el segundo numero a tener en cuenta")

console.log(fizzBuzzDos(maximo, fizz,buzz,fizz_n,buzz_n));
