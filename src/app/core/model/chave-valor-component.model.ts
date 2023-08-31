export class AnaliseComponent<T> {
    chave: string = '';
    valor!: T;

    constructor(chave: string, valor: T) {
        this.chave = chave;
        this.valor = valor;
    }
}