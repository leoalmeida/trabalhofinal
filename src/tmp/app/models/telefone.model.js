"use strict";
/**
 * Created by LeonardoAlmeida on 06/05/16.
 */
var TelefoneDefinition = (function () {
    function TelefoneDefinition(id, numero, tipo) {
        this.id = id;
        this.numero = numero;
        this.tipo = tipo;
        this.id = ++TelefoneDefinition.qtTelefones;
    }
    TelefoneDefinition.prototype.filter = function (list, filterOption) {
        return list;
    };
    TelefoneDefinition.qtTelefones = 0;
    return TelefoneDefinition;
}());
exports.TelefoneDefinition = TelefoneDefinition;

//# sourceMappingURL=telefone.model.js.map
