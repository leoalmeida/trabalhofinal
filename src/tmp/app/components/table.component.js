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
var cliente_service_1 = require("../services/cliente.service");
var TableComponent = (function () {
    function TableComponent(clienteService) {
        this.clienteService = clienteService;
    }
    TableComponent.prototype.ngOnInit = function () { this.getClientes(); };
    TableComponent.prototype.getClientes = function () {
        var _this = this;
        this.clienteService.getClientes()
            .subscribe(function (clientes) { return _this.clientes = clientes; }, function (error) { return _this.errorMessage = error; });
    };
    TableComponent.prototype.addClientes = function (novoCliente) {
        var _this = this;
        if (!novoCliente) {
            return;
        }
        this.clienteService.addCliente(novoCliente)
            .subscribe(function (cliente) { return _this.clientes.push(cliente); }, function (error) { return _this.errorMessage = error; });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'lista-clientes',
            templateUrl: 'app/templates/table.html',
            styleUrls: [
                'app/stylesheets/table.css'
            ]
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClientesService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;

//# sourceMappingURL=table.component.js.map
