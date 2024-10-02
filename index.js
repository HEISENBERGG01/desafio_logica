let Héroi = "Iron-Man"
let XP = 7549

switch (true) {
    case XP <= 1000:
        console.log(Héroi + " classe Ferro");
        break;
    case XP > 1001 && XP <= 2000:
        console.log(Héroi +" classe Bronze");
        break;
    default:
        console.log("Classificação de Héroi não encontrado!");}