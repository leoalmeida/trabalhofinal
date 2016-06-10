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
 * Created by LeonardoAlmeida on 06/05/16.
 */
/**
 * Created by LeonardoAlmeida on 02/05/16.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var forms_component_1 = require("./forms.component");
var imagens_component_1 = require("./imagens.component");
var info_component_1 = require("./info.component");
var links_component_1 = require("./links.component");
var home_component_1 = require("./home.component");
var animation_directive_1 = require("../directives/animation.directive");
var clientes_component_1 = require("./clientes.component");
var clientes_data_1 = require("../data/clientes-data");
var MenuRouterComponent = (function () {
    function MenuRouterComponent(router) {
        this.router = router;
    }
    MenuRouterComponent.prototype.openMenu = function () {
        this.router.navigate([("./" + 'home')]);
    };
    MenuRouterComponent = __decorate([
        core_1.Component({
            template: "\n        <router-outlet></router-outlet>\n        \n        <a (click)=\"openMenu()\" class=\"botao botao-success botao-grande botao-shadow img-circle fixed-btn-menu\">\n            <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n        </a>\n    ",
            directives: [animation_directive_1.AnimationDirective, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '', component: home_component_1.HomeComponent },
            { path: '/forms', component: forms_component_1.FormsComponent },
            { path: '/imagens', component: imagens_component_1.ImagensComponent },
            { path: '/clientes', component: clientes_component_1.ClientesComponent },
            { path: '/info', component: info_component_1.InfoComponent },
            { path: '/:id', component: links_component_1.LinksComponent },
            { path: '/data/clientes', component: clientes_data_1.ClientesData }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MenuRouterComponent);
    return MenuRouterComponent;
}());
exports.MenuRouterComponent = MenuRouterComponent;
//# sourceMappingURL=menuRouter.component.js.map