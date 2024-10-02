let Heroi = "Iron-Man";
let XP = 2.5;
let multiplicador;


while (XP <= 8) {
    multiplicador = Math.floor(Math.random() * 20) + 1;
    XP = multiplicador;
}


let armadura = 564.2 * multiplicador;

console.log(armadura);


let XP_Atual = (armadura > XP) ? armadura : XP;


switch (true) {
    case XP_Atual <= 1000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Ferro");
        break;
    case XP_Atual > 1000 && XP_Atual <= 2000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Bronze");
        break;
    case XP_Atual > 2000 && XP_Atual <= 5000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Prata");
        break;
    case XP_Atual > 5000 && XP_Atual <= 7000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Ouro");
        break;
    case XP_Atual > 7000 && XP_Atual <= 8000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Platina");
        break;
    case XP_Atual > 8000 && XP_Atual <= 9000:
        console.log("O Héroi de nome "+ Heroi + " está no nível de Ascendente");
        break;
        case XP_Atual > 9000 && XP_Atual <= 10000:
            console.log("O Héroi de nome "+ Heroi + " está no nível de Imortal");
            break;
        case XP_Atual > 10000:
            console.log("O Héroi de nome "+ Heroi + " está no nível de Radiante");
            break;
        default:
            console.log("Classificação do Héroi não encontrada!");
    }
