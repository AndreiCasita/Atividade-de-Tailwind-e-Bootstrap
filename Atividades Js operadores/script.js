let x = 5
let y = 10
  console.log("Esse é valor da soma", x+y);
  console.log("Esse é valor da subtração", x-y);
  console.log("Esse é valor da multiplicação", x*y);
  console.log("Esse é valor da divisão", x/y);
  console.log("Esse é valor do resto", x%y);
  console.log("Esse é valor da exponenciação", x**y);

  x = 10
  y = 20

  console.log("Expressões");
  console.log("Igual", x==y);
  console.log("Estritamente igual", x===y);
  console.log("Diferente de", x!=y);
  console.log("Estritamente Diferente", x!==y);
  console.log("Maior que", x>y);
  console.log("Menor que", x<y);

  console.log("AND: ", x && y);
  console.log("OR: ", x || y);
  console.log("NOT: ", !y);


let nota = 70 

    if (nota>=70) {
        console.log("Aprovado");
    }else if (nota >=50 && nota <70 ){
        console.log("Recuperação");
    }else{ console.log("Reprovado");}

let mes = 5; 
switch(mes){
    case 1:
        console.log("Janeiro");
        break;

         case 2:
        console.log("Fevereiro");
        break;

         case 3:
        console.log("Março");
        break;

         case 4:
        console.log("Abril");
        break;

         case 5:
        console.log("Maio");
        break;

         case 6:
        console.log("Junho");
        break;

         case 7:
        console.log("Julho");
        break;

         case 8:
        console.log("Agosto");
        break;

         case 9:
        console.log("Setembro");
        break;

         case 10:
        console.log("Outubro");
        break;

         case 11:
        console.log("Novembro");
        break;

         case 12:
        console.log("Dezembro");
        break;

        default:
            console.log("Nenhum mês escolhido");
}

for (let i = 0; i <= 20; i++){
    console.log(`Número ${i}`)
}

let cidades = ["Belo Horizonte", "Canadá", "Rio de Janeiro"]

for (let i = 0; i < cidades.length; i++){
    console.log(`${cidades[i]}`)
}

for (let i = 10; i >= 0; i--){
    console.log(i)
}  

    