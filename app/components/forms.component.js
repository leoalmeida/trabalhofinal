System.register(['@angular/core', "@angular/common", "../services/cliente.service", '@angular/http', 'angular2-in-memory-web-api/core', '../data/clientes-data', "../directives/dropdown.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, cliente_service_1, core_2, http_1, core_3, clientes_data_1, dropdown_directive_1;
    var FormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (cliente_service_1_1) {
                cliente_service_1 = cliente_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (clientes_data_1_1) {
                clientes_data_1 = clientes_data_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            }],
        execute: function() {
            FormsComponent = (function () {
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
                            core_2.provide(http_1.XHRBackend, { useClass: core_3.InMemoryBackendService }),
                            core_2.provide(core_3.SEED_DATA, { useClass: clientes_data_1.ClientesData }) // in-mem server data
                        ]
                    }), 
                    __metadata('design:paramtypes', [cliente_service_1.ClientesService])
                ], FormsComponent);
                return FormsComponent;
            }());
            exports_1("FormsComponent", FormsComponent);
        }
    }
});
//# sourceMappingURL=forms.component.js.map