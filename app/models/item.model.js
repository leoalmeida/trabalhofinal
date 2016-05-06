System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ItemDefinition;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by LeonardoAlmeida on 02/05/16.
             */
            ItemDefinition = (function () {
                function ItemDefinition(nome, linkImagem, route, externalLink) {
                    this.nome = nome;
                    this.id = ++ItemDefinition.qtItens;
                    this.linkImagem = linkImagem;
                    this.route = route;
                    this.externalLink = externalLink;
                }
                ItemDefinition.prototype.filter = function (list, filterOption) {
                    return list;
                };
                ItemDefinition.qtItens = 0;
                return ItemDefinition;
            }());
            exports_1("ItemDefinition", ItemDefinition);
        }
    }
});

//# sourceMappingURL=item.model.js.map
