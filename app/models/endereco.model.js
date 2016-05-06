System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnderecoDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 06/05/16.
             */
            EnderecoDefinition = (function () {
                function EnderecoDefinition() {
                    this.id = ++EnderecoDefinition.qtEnderecos;
                }
                EnderecoDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                EnderecoDefinition.qtEnderecos = 0;
                return EnderecoDefinition;
            }());
            exports_1("EnderecoDefinition", EnderecoDefinition);
        }
    }
});

//# sourceMappingURL=endereco.model.js.map
