import { Atleta } from './atleta.js';
export class Apresentacao extends Atleta {
    constructor(titulo) {
        this.titulo = titulo;
        this.atletas = [];
    }
    adcionarAtleta(atleta) {
        this.atletas.push(atleta);
    }
    getInfor() {
        console.log(`Campeonato de ${this.titulo}`);

    }
    
}

