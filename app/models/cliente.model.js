System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClienteDefinition;
    return {
        setters:[],
        execute: function() {
            ClienteDefinition = (function () {
                function ClienteDefinition() {
                    this.id = ++ClienteDefinition.qtClientes;
                }
                ClienteDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                ClienteDefinition.qtClientes = 0;
                return ClienteDefinition;
            }());
            exports_1("ClienteDefinition", ClienteDefinition);
        }
    }
});

//# sourceMappingURL=cliente.model.js.map
