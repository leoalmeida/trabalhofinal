/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
export class ItemDefinition {
    public nome: string;
    public id: number;
    public linkImagem: string;
    public route: string;

    static qtItens: number = 0;

    constructor(nome: string, linkImagem: string,route: string) {
        this.nome = nome;
        this.id = ++ItemDefinition.qtItens;
        this.linkImagem = linkImagem;
        this.route = route;
    }

}