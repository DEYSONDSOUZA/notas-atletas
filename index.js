//atleta
//notas
//media 
//export, import
import { Atleta } from './atleta.js';
import { Pontuacao } from './pontuacao.js';
import { Apresentacao } from './apresentacao.js';


//criar apresentacao
let apresentacao = new Apresentacao("Campeonato de Natação");

//adcionar atletas e suas pontuações
let atleta1 = new Pontuacao("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]); 
//dados dos atletas
let atletas = [
 {nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88]},
 {nome: "Fernando Puntel", notas:  [8, 10, 10, 7, 9.33]},
 {nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8]},
 {nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5]}
];
atletas.forEach(function(atletaData) {
    console.log(atletaData);
});
//CONSOLES

