import { Atleta } from './atleta.js';
export class Pontuacao extends Atleta {
    constructor(nome, pontos){
        super(nome);
        this.pontos = pontos;
    }
    //calcular media
    calcularMedia() {
        //ordenar os pontos
        let pontosOrdenados = this.pontos.sort(function(a, b) { 
            return a - b; 
        });
        //remover o menor e o maior
        pontosOrdenados.pop();
        pontosOrdenados.shift();
        //calcular a media
        let soma = pontosOrdenados.reduce(function(total, atual) {
            return total + atual;
        }, 0);
        let media = soma / pontosOrdenados.length;
        return media.toFixed(2);
    }
    
    //getResumo
    getPontos() {
        return `
        Atleta: ${this.nome }
        Pontos Obtidos: ${this.pontos}
        Média Válida: ${this.calcularMedia()}`;
        
    }
}