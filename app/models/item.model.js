"use strict";
/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
var ItemDefinition = (function () {
    function ItemDefinition(id, name, imgLink, routeLink, isExternal) {
        this.id = id;
        this.name = name;
        this.imgLink = imgLink;
        this.routeLink = routeLink;
        this.isExternal = isExternal;
    }
    ItemDefinition.prototype.filter = function (list, filterOption) {
        return list;
    };
    ItemDefinition.qtItens = 0;
    return ItemDefinition;
}());
exports.ItemDefinition = ItemDefinition;

//# sourceMappingURL=item.model.js.map
