/**
 * Created by LeonardoAlmeida on 07/05/16.
 */
export class ClientesData {
    createDb() {
        let clientes = [
            { "id": "1", "nome": "Windstorm", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{"id": "1", "numero": "12345678900", "tipo": "Residencial"}], "endereco": [{"id": "1", "tpEndereco": "Residencial", "tpImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil"}]},
            { "id": "2", "nome": "Bombasto", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{"id": "1", "numero": "12345678900", "tipo": "Residencial"}], "endereco": [{"id": "1", "tpEndereco": "Residencial", "tpImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil"}]},
            { "id": "3", "nome": "Magneta", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{"id": "1", "numero": "12345678900", "tipo": "Residencial"}], "endereco": [{"id": "1", "tpEndereco": "Residencial", "tpImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil"}]},
            { "id": "4", "nome": "Tornado", "cpf": "12345678900", "email": "abc@abc.com", "tipoCliente": "A", "telefone": [{"id": "1", "numero": "12345678900", "tipo": "Residencial"}], "endereco": [{"id": "1", "tpEndereco": "Residencial", "tpImovel": "Alugado", "cep": "13565090", "rua": "Ray Wesley Herrick", "numero": "1501", "complemento": "fundos", "bairro": "Jd. Capirama", "cidade": "São Mateus", "estado": "São Paulo", "pais": "Brasil"}]}
        ];
        return {clientes};
    }
}