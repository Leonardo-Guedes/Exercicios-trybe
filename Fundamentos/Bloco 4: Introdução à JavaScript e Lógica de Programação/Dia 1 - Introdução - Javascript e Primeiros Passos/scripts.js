//const myName = "Leonardo";
//const birthCity = "Poços de Caldas";
//let birthYear = 1999;
//birthYear = 2030;    

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//const nota = 50;
//if (nota >= 80){
//    console.log("Parabéns, você foi aprovado(a)")
//}
//else if(nota >=60 && nota <80){
//    console.log("Você esta na nossa lista de espera")
//}
//else{
//    console.log("Você foi reprovada(o)")
//}
const estado = 'reprovada';
switch(estado){
    case 'aprovada':
        console.log("Parabéns, você foi aprovado(a)");
        break;
    
    case 'lista':
        console.log("Você esta na nossa lista de espera");
        break;
    
    case 'reprovada':
        console.log("Você foi reprovada(o)");
        break;
    
    default:
        console.log("não se aplica");
        break;
    
}
