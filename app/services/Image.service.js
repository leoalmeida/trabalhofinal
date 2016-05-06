System.register(['@angular/core', "../models/item.model"], function(exports_1, context_1) {
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
    var core_1, item_model_1;
    var ImageItems, imagePromise, ImageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_model_1_1) {
                item_model_1 = item_model_1_1;
            }],
        execute: function() {
            ImageItems = [
                new item_model_1.ItemDefinition("Img1", "/assets/imgHD/apple-logo-white.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img2", "/assets/imgHD/amsterdam.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img3", "/assets/imgHD/applecrash.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img4", "/assets/imgHD/bandg.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img5", "/assets/imgHD/black_leather.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img6", "/assets/imgHD/Cavalo-selvagem-no-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img7", "/assets/imgHD/crissxcross.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img8", "/assets/imgHD/fundos-de-tela-fundos.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img9", "/assets/imgHD/Mar-Papel-de-Parede.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img10", "/assets/imgHD/Imagem-do-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img11", "/assets/imgHD/Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img12", "/assets/imgHD/Megulho-no-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img13", "/assets/imgHD/Paisagem-do-Mar.jpeg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img14", "/assets/imgHD/Papel-de-Parede-do-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img15", "/assets/imgHD/Papel-de-Parede-Mar-Aberto.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img16", "/assets/imgHD/Por-do-sol-no-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img17", "/assets/imgHD/thinkdifferent.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img18", "/assets/imgHD/Wallpaper-do-Mar.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img19", "/assets/imgHD/wallpapers-hd-Papel-de-Parede.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img20", "/assets/imgHD/water-apple.jpg", "./Imagens", ""),
                new item_model_1.ItemDefinition("Img20", "/assets/imgHD/wwdc2012.jpg", "./Imagens", "")
            ];
            imagePromise = Promise.resolve(ImageItems);
            ImageService = (function () {
                function ImageService() {
                }
                ImageService.prototype.getAllImageItems = function () { return imagePromise; };
                // See the "Take it slow" appendix
                ImageService.prototype.getAllImagesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(ImageItems); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                ImageService.nextImageId = 100;
                ImageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ImageService);
                return ImageService;
            }());
            exports_1("ImageService", ImageService);
        }
    }
});

//# sourceMappingURL=Image.service.js.map
