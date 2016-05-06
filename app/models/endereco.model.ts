/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
export class EnderecoDefinition {

    //Endereco
    public id: number;
    public tpEndereco: string;
    public tpImovel: string;
    public cep: string;
    public rua: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public pais: string;

    static qtEnderecos: number = 0;

    constructor() {
        this.id = ++EnderecoDefinition.qtEnderecos;
    }

    filter(list: EnderecoDefinition, filterOption: string){
        return list;
    }

}