//exportacao nomeada
export class Atleta {
    constructor(nome, pontos) {
        this.nome = nome;
        this.pontos = pontos;
        this.atletas = [];
    }
    adicionarAtleta(atleta) {
        this.atletas.push(atleta.nome, atleta.pontos);
    }
    getResumo() {
        return `Atleta: ${this.nome} Seus pontos são: ${this.pontos} `;
    }
}