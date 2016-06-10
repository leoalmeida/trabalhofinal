/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
export class EnderecoDefinition {

    static qtEnderecos: number = 0;

    constructor(
            public id: number,
            public tipoEndereco: string,
            public tipoImovel: string,
            public cep: string,
            public rua: string,
            public numero: string,
            public complemento: string,
            public bairro: string,
            public cidade: string,
            public estado: string,
            public pais: string
    ){
        this.id = ++EnderecoDefinition.qtEnderecos;
    }

    filter(list: EnderecoDefinition, filterOption: string){
        return list;
    }

}