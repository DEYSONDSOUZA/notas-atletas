//exportacao nomeada
export class Atleta {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return `Atleta: ${this.nome}`;
    }
}