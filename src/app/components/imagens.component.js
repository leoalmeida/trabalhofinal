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
var items_service_1 = require("../services/items.service");
var ImagensComponent = (function () {
    function ImagensComponent(service) {
        this.service = service;
    }
    ImagensComponent.prototype.getImages = function () {
        var _this = this;
        this.service.getAllItems("images")
            .subscribe(function (imageList) { return _this.imageList = imageList; }, function (error) { return _this.errorMessage = error; });
    };
    ImagensComponent.prototype.ngOnInit = function () { this.getImages(); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImagensComponent.prototype, "filtername", void 0);
    ImagensComponent = __decorate([
        core_1.Component({
            selector: 'imagens',
            templateUrl: 'app/templates/imagens.html',
            styleUrls: ['app/stylesheets/imagens.css'],
            directives: [common_1.CORE_DIRECTIVES],
            providers: [items_service_1.ItemsService]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], ImagensComponent);
    return ImagensComponent;
}());
exports.ImagensComponent = ImagensComponent;
//# sourceMappingURL=imagens.component.js.map