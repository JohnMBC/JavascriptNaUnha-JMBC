/*Leia 2 valores inteiros e armazene nas variáveis A e B.
Efetue a soma de A e B atribuindo o seu resultado na variável X. 
Imprima X conforme exemplo apresentado abaixo. 
Não apresente mensagem alguma 
além daquilo que está sendo especificado e
não esqueça de imprimir o fim de linha após o resultado, ??
caso contrário, você receberá "Presentation Error".
A entrada contém 2 valores inteiros.
A saida Imprima a mensagem "X = "(letra X maiúscula) seguido pelo valor da variável X e pelo final de linha.Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.
Exemplos de Entrada	
10
9
Exemplos de Saída
X = 19
*/

A = parseInt(prompt("Digite o primeiro valor: "));
B = parseInt(prompt("Digite o segundo valor:"));
X = A + B;
console.log('X = ' + X);
alert(`X = ${X}`);
