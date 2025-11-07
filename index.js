//atleta
//pontos
//media 
//export, import
import { Atleta } from './atleta.js';
import { Pontuacao } from './pontuacao.js';


//dados dos atletas
let atletas = [
 {nome: "Cesar Abascal", pontos: [10, 9.34, 8.42, 10, 7.88]},
 {nome: "Fernando Puntel", pontos:  [8, 10, 10, 7, 9.33]},
 {nome: "Daiane Jelinsky", pontos: [7, 10, 9.5, 9.5, 8]},
 {nome: "Bruno Castro", pontos: [10, 10, 10, 9, 9.5]}
];
atletas.forEach((dadosAtleta) => {
    let atletaObj = new Atleta(dadosAtleta.nome, dadosAtleta.pontos);
    atletaObj.adicionarAtleta(atletaObj)
    let pontuacaoObj = new Pontuacao(dadosAtleta.nome, dadosAtleta.pontos);
    console.log(pontuacaoObj.getResultado());});


 



