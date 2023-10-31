// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.
// let idade = Number(prompt("Qual sua idade?"))
// if (idade>=18) {
//     console.log("Pode dirigir");
//     }else{
//         console.log("Não pode dirigir")
//     }

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

// let idade = Number(prompt("Qual sua idade?"))
// let habilitado=prompt("Você é habilitado? Sim ou Não")
// if (idade>=18 && habilitado=="Sim") {
//     console.log("Pode dirigir");
//     }else{
//         console.log("Não pode dirigir")
//     }

// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

// let dia = Number(prompt("Digite um numero entre 1 e 7"));
// if (dia == 1) {
//   document.write("Domingo");
// } else if (dia == 2) {
//   document.write("Segunda");
// } else if (dia == 3) {
//   document.write("Terça");
// } else if (dia == 4) {
//   document.write("Quarta");
// } else if (dia == 5) {
//   document.write("Quinta");
// } else if (dia == 6) {
//   document.write("Sexta");
// } else if (dia == 7) {
//   document.write("Sabado");
// } else {
//   document.write("Dia não reconhecido");
// }

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.
// let dia = Number(prompt("Digite um numero entre 1 e 7"));
// switch (dia) {
//   case 1:
//     document.write("Domingo");
//     break;
//   case 2:
//     document.write("Segunda");
//     break;
//   case 3:
//     document.write("Terça");
//     break;
//   case 4:
//     document.write("Quarta");
//     break;
//   case 5:
//     document.write("Quinta");
//     break;
//   case 6:
//     document.write("Sexta");
//     break;
//   case 7:
//     document.write("Sabado");
//     break;
//   default:
//     document.write("Dia não reconhecido");
//     break;
// }

// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 6. Insira no html 30 ( trinta ) números ímpares.

// for (let i = 1; i <= 60; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.
// let soma = 0;
// do {
//   for (let i = 10; i <= 100; i++) {
//     soma += i;
//   }
// } while (soma <= 100);
// {
// }
// document.write(soma);

// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

// let salario = Number(prompt("Digite seu salario"));
// if (salario < 1903.98) {
//   document.write("ISENTO DE IR");
// } else {
//   document.write("TRIBUTADO NO IR");
// }

// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.
// let valor = 167;

// if (valor <= 1) {
//   console.log(`${valor} não é um número primo.`);
// } else {
//   let isPrime = true;
//   for (let i = 3; i * i <= valor; i += 1) {
//     if (valor % i === 0 || valor % (i + 2) === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${valor} é um número primo.`);
//   } else {
//     console.log(`${valor} não é um número primo.`);
//   }
// }
// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
// forma: 1 para sexo feminino e 2 para sexo masculino) de uma
// pessoa, construa um programa que calcule e mostre seu peso ideal,
// utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

// let altura = Number(prompt("Digite a altura em metros:"));
// let sexo = Number(prompt("Digite o sexo (1 para feminino, 2 para masculino):"));

// let pesoIdeal;

// if (sexo === 1) {
//     pesoIdeal = (62.1 * altura) - 44.7;
// } else if (sexo === 2) {
//     pesoIdeal = (72.7 * altura) - 58;
// } else {
//     console.log("Sexo não reconhecido. Use 1 para feminino e 2 para masculino.");
// }

// if (pesoIdeal) {
//     console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
// }

// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

// let turno = prompt(
//   "Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno:"
// );

// let mensagem;

// switch (turno) {
//   case "M":
//     mensagem = "Bom dia!";
//     break;
//   case "V":
//     mensagem = "Boa tarde!";
//     break;
//   case "N":
//     mensagem = "Boa noite!";
//     break;
//   default:
//     mensagem = "Valor inválido";
// }

// alert(mensagem);

// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

// let idade = Number(prompt("Digite a sua idade:"));

// if (idade >= 18 && idade <= 67) {
//   console.log("Você pode doar sangue!");
// } else {
//   console.log("Você não pode doar sangue.");
// }

// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

// let numero = Number(prompt("Digite um número:"));

// for (let i = 1; i <= numero; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

// let numero = Number(prompt("Digite um número:"));
// let soma = 0;
// let ultimoValor = numero;

// while (soma < 500) {
//   ultimoValor = ultimoValor * 3;
//   soma += ultimoValor;
// }

// console.log("O último valor multiplicado por 3 é: " + ultimoValor);

// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

// let ladoA = Number(prompt("Digite o valor do lado A:"));
// let ladoB = Number(prompt("Digite o valor do lado B:"));
// let ladoC = Number(prompt("Digite o valor do lado C:"));

// if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
//     if (ladoA === ladoB && ladoB === ladoC) {
//         console.log("É um triângulo equilátero.");
//     } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
//         console.log("É um triângulo isósceles.");
//     } else {
//         console.log("É um triângulo escaleno.");
//     }
// } else {
//     console.log("Os valores fornecidos não formam um triângulo.");
// }

// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

// let anoAtual = 2023

// let anoNascimento = Number(prompt("Digite o ano de nascimento:"));

// let idade = anoAtual - anoNascimento;

// if (idade >= 16) {
//     console.log("Você pode votar este ano!");
// } else {
//     console.log("Você não pode votar este ano.");
// }

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

// let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

// let votosBrancos = parseInt(prompt("Digite o número de votos em branco:"));

// let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));

// let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

// if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
//     console.log("A soma dos votos não pode ser maior que o número total de eleitores.");
// } else {
//     let percentualBrancos = (votosBrancos / totalEleitores) * 100;
//     let percentualNulos = (votosNulos / totalEleitores) * 100;
//     let percentualValidos = (votosValidos / totalEleitores) * 100;

//     console.log(`Percentual de votos em branco: ${percentualBrancos.toFixed(2)}%`);
//     console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
//     console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
// }

// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

// let precoTabela = Number(prompt("Qual valor do produto?"));
// let parcelas = Number(prompt("Quantas vezes quer pagar?"));

// switch (parcelas) {
//   case 1:
//     document.write("A vista... R$" + precoTabela * 0.975);
//     break;
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     document.write("De 2 até 5 vezes... R$" + precoTabela);
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     document.write("De 6 até 10 vezes... R$" + precoTabela * 1.06);
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//     document.write("De 11 até 15 vezes... R$" + precoTabela * 1.13);
//     break;

//   default:
//     document.write("valor invalido");
//     break;
// }
