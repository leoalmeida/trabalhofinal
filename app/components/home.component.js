System.register(['@angular/core', "@angular/common", "@angular/router", "../services/menu.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, menu_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(service, router) {
                    this.service = service;
                    this.router = router;
                    this.filtername = "";
                }
                HomeComponent.prototype.toggleMenu = function () {
                    this.showMenu = !this.showMenu;
                };
                HomeComponent.prototype.goExternal = function (link) {
                    window.location.href = link;
                };
                HomeComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
                    var _this = this;
                    this.currSegment = curr;
                    this.selectedId = +currTree.parent(curr).getParam('id');
                    this.service.getAllMenuItems().then(function (list) { return _this.list = list; });
                };
                HomeComponent.prototype.onSelect = function (item) {
                    if (item.externalLink) {
                        this.router.navigate([item.externalLink]);
                    }
                    else {
                        this.router.navigate([("./" + item.route)], this.currSegment);
                    }
                };
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getAllMenuItems().then(function (list) { return _this.list = list; });
                    this.showMenu = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HomeComponent.prototype, "filtername", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], HomeComponent.prototype, "showMenu", void 0);
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'painel',
                        templateUrl: 'app/templates/home.html',
                        styleUrls: ['app/stylesheets/home.css'],
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [menu_service_1.MenuService]
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=home.component.js.map
