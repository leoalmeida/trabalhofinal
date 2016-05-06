System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TelefoneDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 06/05/16.
             */
            TelefoneDefinition = (function () {
                function TelefoneDefinition() {
                    this.id = ++TelefoneDefinition.qtTelefones;
                }
                TelefoneDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                TelefoneDefinition.qtTelefones = 0;
                return TelefoneDefinition;
            }());
            exports_1("TelefoneDefinition", TelefoneDefinition);
        }
    }
});

//# sourceMappingURL=telefone.model.js.map
