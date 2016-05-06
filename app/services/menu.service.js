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
    var MenuItems, menuPromise, MenuService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_model_1_1) {
                item_model_1 = item_model_1_1;
            }],
        execute: function() {
            MenuItems = [
                new item_model_1.ItemDefinition('Forms', "/assets/imagens/Form-96.png", '/forms', ""),
                new item_model_1.ItemDefinition("Imagens", "/assets/imagens/Beach-96.png", '/imagens', ""),
                new item_model_1.ItemDefinition('Table', "/assets/imagens/Grid-96.png", '/table', ""),
                new item_model_1.ItemDefinition('Info', "/assets/imagens/About-96.png", '/info', ""),
                new item_model_1.ItemDefinition("Github", "/assets/imagens/Github2-96.png", '/Links', "https://github.com/leoalmeida/trabalhofinal"),
                new item_model_1.ItemDefinition("CSS", "/assets/imagens/CSS3-96.png", '/Links', "https://cssanimation.rocks/pt/"),
                new item_model_1.ItemDefinition("HBO Go", "/assets/imagens/HBOGo-96.png", '/Links', "http://www.hbogo.com.br/"),
                new item_model_1.ItemDefinition("WhatsApp", "/assets/imagens/WhatsApp-96.png", '/Links', "https://web.whatsapp.com/"),
                new item_model_1.ItemDefinition("Facebook", "/assets/imagens/Facebook-96.png", '/Links', "http://www.facebook.com"),
                new item_model_1.ItemDefinition("Chrome", "/assets/imagens/Chrome-96.png", '/Links', "https://www.google.com/chrome/")
            ];
            menuPromise = Promise.resolve(MenuItems);
            MenuService = (function () {
                function MenuService() {
                }
                MenuService.prototype.getAllMenuItems = function () { return menuPromise; };
                MenuService.nextMenuId = 100;
                MenuService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MenuService);
                return MenuService;
            }());
            exports_1("MenuService", MenuService);
        }
    }
});

//# sourceMappingURL=menu.service.js.map
