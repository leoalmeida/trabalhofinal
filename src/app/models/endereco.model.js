"use strict";
/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
var EnderecoDefinition = (function () {
    function EnderecoDefinition(id, tipoEndereco, tipoImovel, cep, rua, numero, complemento, bairro, cidade, estado, pais) {
        this.id = id;
        this.tipoEndereco = tipoEndereco;
        this.tipoImovel = tipoImovel;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.id = ++EnderecoDefinition.qtEnderecos;
    }
    EnderecoDefinition.prototype.filter = function (list, filterOption) {
        return list;
    };
    EnderecoDefinition.qtEnderecos = 0;
    return EnderecoDefinition;
}());
exports.EnderecoDefinition = EnderecoDefinition;
//# sourceMappingURL=endereco.model.js.map