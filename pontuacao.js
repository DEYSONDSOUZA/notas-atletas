import { Atleta } from './atleta.js';
export class Pontuacao extends Atleta {
    constructor(nome, pontos){
        super(nome, pontos);
    }
    //calcular media
    calcularMedia() {
        //ordenar os pontos
        let pontosOrdenados = this.pontos.sort(function(a, b) { 
            return a - b; 
        });
        //remover o menor e o maior
        let pontosValidos = pontosOrdenados.slice(1, 4);
        //calcular a media
        let soma = pontosValidos.reduce((total, atual) => {
            return total + atual;
        }, 0);
        let media = soma / pontosValidos.length;
        return media.toFixed(2);
    }
    
    //getResumo
    getResultado() {
        return `
        Atleta: ${this.nome}
        Pontos Obtidos: ${this.pontos}
        Média Válida: ${this.calcularMedia()}`;       
    }
}

