const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna R o caracter que esta na 4º posição;
console.log(escola.charAt(5)); // Não retorna nada, pois começa do 0 até 4. Index 5 n existem em Coder
console.log(escola.charCodeAt(3)); // Exibe o código da TABELA ASCII 3 = 51;
console.log(escola.indexOf('3')) //Informa em que posição o elemento solicitado está 0.1.2.3 <-

console.log(escola.substring(1)) // do 1 até o final, log = OD3r
console.log(escola.substring(0, 3)) // Do início até o 3º item, log = Cod

console.log('Escola'.concat(escola).concat('!')); // Imprimiu EscolaCod3r!
console.log(escola.replace(/\d/, 'e')) // Substituiu todos os DIGITOS pela LETRA E;

console.log('Ana, Maria, Pedro'.split(/,/)); //Dividiu a STRING em 3 ARRAYS [ 'Ana', ' Maria', ' Pedro' ]