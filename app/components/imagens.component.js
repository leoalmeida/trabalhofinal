System.register(['@angular/core', "@angular/common", "../services/Image.service"], function(exports_1, context_1) {
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
    var core_1, common_1, Image_service_1;
    var ImagensComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Image_service_1_1) {
                Image_service_1 = Image_service_1_1;
            }],
        execute: function() {
            ImagensComponent = (function () {
                function ImagensComponent(service) {
                    this.service = service;
                }
                ImagensComponent.prototype.getImages = function () {
                    var _this = this;
                    this.service.getAllImageItems().then(function (imageList) { return _this.imageList = imageList; });
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
                        providers: [Image_service_1.ImageService]
                    }), 
                    __metadata('design:paramtypes', [Image_service_1.ImageService])
                ], ImagensComponent);
                return ImagensComponent;
            }());
            exports_1("ImagensComponent", ImagensComponent);
        }
    }
});

//# sourceMappingURL=imagens.component.js.map
