/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
import {EnderecoDefinition} from "./endereco.model";
import {TelefoneDefinition} from "./telefone.model";
export class ClienteDefinition {
    static qtClientes: number = 0;

    constructor(
            public id: number,
            public nome: string,
            public cpf: string,
            public email: string,
            public tipoCliente: string,
            public telefones: TelefoneDefinition[],
            public enderecos: EnderecoDefinition[]) {
        this.id = ++ClienteDefinition.qtClientes;
    }

    filter(list: ClienteDefinition, filterOption: string){
        return list;
    }

}