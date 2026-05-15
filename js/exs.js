//pp1, nr16
let courseName = "Desenvolvimento UI/UX";
let courseHours = 950;

// alert("o nome do curso é "+courseName+ " e o curso tem "+courseHours+"h");

//pp1, nr19
// let name = prompt("Qual é o teu nome?");
// let age = prompt("Qual é a tua idade?");
// let surname = prompt("Qual é o teu apelido?");
// let height = prompt("Qual é a tua altura?");

// console.log('olá '+name+ ' '+surname +' tens '+age+' anos  e a altura é '+height);

//pp1, nr26

// let name = prompt("Qual é o teu nome?");

// let lastPosition = name.length-1;

// console.log('o nome '+name+' tem '+name.length);
// console.log('a primeira letra do nome é '+name[0]+ 'e a última letra é '+name[lastPosition]);

//pp1, nr29
// let message = " TASTE THE RAINBOW! ";
// console.log(message)

// let whisper = message.toLowerCase().trim();
// console.log(whisper);

//nome= Carlos Fidalgo
//firstName = Carlos

//pp1, n34
// let myLuckyNumber = 16;
// let myName = 'Sara';

// console.log("o meu nome é "+myName+ " e o meu número preferido é "+myLuckyNumber);

// let num1= Number(prompt('Indique o número 1:'));
// let num2= Number(prompt('Indique o número 2:'));

// console.log("a multiplicação é: "+(num1*num2));

// //ex7 ficha trabalho1
// let price = Number(prompt('qual é o preço? (coloque o valor em euros)'));
// let discount = Number(prompt('qual é o desconto? (coloque o valor em %)'));

// console.log("ValorDesconto: " + price * (discount / 100) + "€");

//pp estruturas controlo, pp6
// let weekDay = prompt('que dia é hoje?').toLowerCase();

// if(weekDay == 'sexta' || weekDay == 'sexta-feira' || weekDay == 'sexta feira'){
//     alert('yyyyyaayyyy é Sexta');
// }else{
//      alert('força nisso!');
// }

// let pass = prompt("Insira uma pass com pelo menos 6caracteres:");

// if (pass.length < 6) {
//   alert("a pass tem que ter pelo menos 6caracteres");
// } else {
//   alert("pass válida!");
// }

// let weekday = prompt("Qual o dia da semana?").toLowerCase();

// switch (weekday) {
//   case "segunda":
//   case "segunda-feira":
//     alert("Vamos lá começar a semana...");
//     break;
//   case "terça":
//   case "terça-feira":
//     alert("Passamos a segunda...");
//     break;
//   case "quarta":
//   case "quarta-feira":
//     alert("Meio da semana");
//     break;
//   case "quinta":
//   case "quinta-feira":
//     alert("Está quase...");
//     break;
//   case "sexta":
//   case "sexta-feira":
//     alert("YAY, sobrevivemos a mais uma semana!");
//     break;
//   case "sabado":
//   case "sábado":
//   case "domingo":
//   case "feriado":
//     alert("Descaanso!!");
//     break;
//   default:
//     alert("Opção inválida");
// }

//pp estruturas de controlo, pp12
for (let count = 1; count < 7; count++) {
  console.log(count + " Da ba dee da ba daa");
}

for (let count = 25; count > 0; count = count - 5) {
  console.log(count);
}
