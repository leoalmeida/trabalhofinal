"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by LeonardoAlmeida on 03/05/16.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var menu_service_1 = require("../services/menu.service");
var LinksComponent = (function () {
    function LinksComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    LinksComponent.prototype.isSelected = function (item) { return item.id === this.selectedId; };
    LinksComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getAllMenuItems().then(list => this.itemList = list);
    };
    LinksComponent.prototype.onSelect = function (item) {
        // Absolute link
        // this.router.navigate([`/crisis-center`, crisis.id]);
        // Relative link
        this.router.navigate([("./" + item.id)], this.currSegment);
    };
    LinksComponent = __decorate([
        core_1.Component({
            template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises\"\n        [class.selected]=\"isSelected(crisis)\"\n        (click)=\"onSelect(link)\">\n        <span class=\"badge\">{{link.id}}</span> {{link.name}}\n      </li>\n    </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
    ], LinksComponent);
    return LinksComponent;
}());
exports.LinksComponent = LinksComponent;

//# sourceMappingURL=links.component.js.map
