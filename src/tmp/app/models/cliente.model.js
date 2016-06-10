"use strict";
var ClienteDefinition = (function () {
    function ClienteDefinition(id, nome, cpf, email, tipoCliente, telefones, enderecos) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.tipoCliente = tipoCliente;
        this.telefones = telefones;
        this.enderecos = enderecos;
        this.id = ++ClienteDefinition.qtClientes;
    }
    ClienteDefinition.prototype.filter = function (list, filterOption) {
        return list;
    };
    ClienteDefinition.qtClientes = 0;
    return ClienteDefinition;
}());
exports.ClienteDefinition = ClienteDefinition;

//# sourceMappingURL=cliente.model.js.map
