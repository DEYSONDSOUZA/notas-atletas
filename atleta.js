//exportacao nomeada
export class Atleta {
    constructor(nome, pontos) {
        this.nome = nome;
        this.pontos = pontos;
        this.atletas = [];
    }
    adcionarAtletas(atleta) {
        this.atletas.push(nome, pontos);
    }
    getResumo() {
        return `Atleta: ${this.nome} Seus pontos são: ${this.pontos} `;
    }
}