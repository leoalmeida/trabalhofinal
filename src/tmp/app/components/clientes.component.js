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
 * Created by LeonardoAlmeida on 07/05/16.
 */
var core_1 = require('@angular/core');
var table_component_1 = require('./table.component');
var cliente_service_1 = require('../services/cliente.service');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
// in-memory web api imports
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var clientes_data_1 = require('../data/clientes-data');
var ClientesComponent = (function () {
    function ClientesComponent() {
    }
    ClientesComponent = __decorate([
        core_1.Component({
            selector: 'clientes',
            template: "\n            <h1>Gest\u00E3o de Clientes</h1>\n            <lista-clientes></lista-clientes>\n    ",
            directives: [table_component_1.TableComponent],
            providers: [
                http_1.HTTP_PROVIDERS,
                cliente_service_1.ClientesService,
                // in-memory web api providers
                core_2.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
                core_2.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: clientes_data_1.ClientesData }) // in-mem server data
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientesComponent);
    return ClientesComponent;
}());
exports.ClientesComponent = ClientesComponent;

//# sourceMappingURL=clientes.component.js.map
