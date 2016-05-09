System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/throw', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var ClientesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            ClientesService = (function () {
                function ClientesService(http) {
                    this.http = http;
                    /*
                     private clientesUrl = 'app/clientes.json'; // URL to JSON file
                     */
                    this.clientesUrl = 'data/clientes'; // URL to web api
                }
                ClientesService.prototype.getClientes = function () {
                    return this.http.get(this.clientesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                ClientesService.prototype.addCliente = function (cliente) {
                    var body = JSON.stringify({ cliente: cliente });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this.clientesUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                ClientesService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                ClientesService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                ClientesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientesService);
                return ClientesService;
            }());
            exports_1("ClientesService", ClientesService);
        }
    }
});

//# sourceMappingURL=cliente.service.js.map
