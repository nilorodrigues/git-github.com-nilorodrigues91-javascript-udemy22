let a = 7
let b = 94
// depois da troca a=94 e b = 7

let c = a;

a = b;
b = c;
c = a;

console.log(a)
console.log(b)



[a, b] = [b, a]