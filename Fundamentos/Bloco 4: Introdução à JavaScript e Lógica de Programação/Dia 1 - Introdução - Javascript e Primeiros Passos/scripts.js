//exercício 1
const a =10;
const b = 6;
const adicao = a+b;
console.log(adicao);
const subtracao = a-b;
console.log(subtracao);
const multiplicacao = a*b;
console.log(multiplicacao);
const divisao = a/b;
console.log(divisao);
const modulo = a%b;
console.log(modulo);
//exercicio 2
if(a>b){
    console.log("O maior número é:",a,);
}
else if(b>a){
    console.log("O maior número é:",b);
}
else{
    console.log("Os número são iguais");
}
//exercicio 3
const c = 16;
if(a>b && a>c){
    console.log("O maior número é:", a);
}
else if(b>a && b>c){
    console.log("O maior número é:", b);
}
else if(c>a && c>b){
    console.log("O maior número é:", c);
}
//exercicio 4
if(a> 0){
    console.log("Positive");
}
else if(a<0){
    console.log("Negative");
}
else{
    console.log("zero");
}
//exercicio 5
const ang1 = 60,ang2 = 30,ang3 = 90;
const soma= ang3 + ang2 + ang1;
if(ang1 <0 || ang2 <0 || ang3 <0){
    console.log("Um ou mais angulos digitados são invalidos");
}
else if (soma == 180){
    console.log("true");
}
else{
    console.log("false");
}
//exercicio 6
let peça='peão';
peça = peça.toLowerCase();
if(peça == 'torre' || peça =='rooks'){  
    console.log("In its line or a row");
}
else if(peça == 'bispo' || peça =='bishop'){
    console.log("Diagonally");
}
else if(peça == 'queen' || peça =='rainha'){
    console.log("In its line, a row and diagonally");
}else if(peça == 'knight' || peça=='cavalo'){
    console.log("Moves in 'L', and can jump ally units");
}else if(peça == 'rei' || peça=='king'){
    console.log("From its square to a neighboring square");
}else if(peça == 'peão' || peça=='pawn'){
    console.log("One square straight ahead");
}else{
    console.log("Undefined");
}
//exercicio 7
const porcentagem= 75;
if(porcentagem > 100 || porcentagem <0){
    console.log("Valor indefinido")
}else if(porcentagem >= 90){
    console.log("A");
}else if(porcentagem >=80){
    console.log("B");
}else if(porcentagem>=70){
    console.log("C");
}else if(porcentagem >= 60){
    console.log("D");
}else if(porcentagem >=50){
    console.log("E");
}else if(porcentagem <50){
    console.log("F");
}
//exercicio 8
if(a%2 == 0 || b%2 ==0 || c%2 ==0){
    console.log("true");
}
else{
    console.log("false");
}
//exercicio 9
if(a%2 !=0 || b%2 !=0 || c%2 !=0) {
    console.log("true");
}
else {
    console.log("false");
}
//exercicio 10
const valorCusto=20, valorVenda=100;


    console.log("O lucro foi de : R$",valorVenda-(valorCusto + 0.2*valorCusto));

//exercicio 11
const salario=1550;
let INSS=0, IR=0, salarioLiquido;
if(salario <= 1556.94){
    INSS=(salario *8)/100;
}else if(salario >= 1556.95 && salario <=2594.92){
    INSS=(salario *9)/100;
    
}else if(salario >= 2594.93 && salario <=5189.82){
    INSS=(salario*11)/100;
    console.log("teste");
}else if(salario > 5189.83){
    INSS=570.88;
}

if(salarioLiquido >= 1903.98 && salarioLiquido <= 2826.65){
    IR= (salarioLiquido*0.075) - 142.80;
}else if(salarioLiquido >=2826.66 && salarioLiquido <=3751.05){
    IR= (salarioLiquido *0.15)-354.80;
}else if(salarioLiquido >=3751.06 && salarioLiquido <=4664.08){
    IR= (salarioLiquido *0.225)-636.13;
}else if(salarioLiquido >=4664.68){
    IR= (salarioLiquido *0.27)-869.36;
}
console.log("Salario final :", salarioLiquido-IR);