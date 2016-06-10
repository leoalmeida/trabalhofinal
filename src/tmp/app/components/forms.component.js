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
 * Created by LeonardoAlmeida on 02/05/16.
 */
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var cliente_service_1 = require("../services/cliente.service");
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
// in-memory web api imports
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var clientes_data_1 = require('../data/clientes-data');
var dropdown_directive_1 = require("../directives/dropdown.directive");
var FormsComponent = (function () {
    function FormsComponent(clienteService) {
        this.clienteService = clienteService;
    }
    FormsComponent.prototype.ngOnInit = function () { this.getClientes(); };
    FormsComponent.prototype.getClientes = function () {
        var _this = this;
        this.clienteService.getClientes()
            .subscribe(function (clientes) { return _this.clientes = clientes; }, function (error) { return _this.errorMessage = error; });
    };
    FormsComponent.prototype.addClientes = function (novoCliente) {
        var _this = this;
        if (!novoCliente) {
            return;
        }
        this.clienteService.addCliente(novoCliente)
            .subscribe(function (cliente) { return _this.clientes.push(cliente); }, function (error) { return _this.errorMessage = error; });
    };
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'forms',
            templateUrl: 'app/templates/form.html',
            styleUrls: [
                'app/stylesheets/form.css'
            ],
            directives: [common_1.CORE_DIRECTIVES, dropdown_directive_1.DropdownComponent],
            providers: [
                http_1.HTTP_PROVIDERS,
                cliente_service_1.ClientesService,
                // in-memory web api providers
                core_2.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
                core_2.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: clientes_data_1.ClientesData }) // in-mem server data
            ]
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClientesService])
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;

//# sourceMappingURL=forms.component.js.map
