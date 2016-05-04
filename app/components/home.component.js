System.register(['angular2/core', "angular2/common", "../filters/img-filter.pipe", "angular2/router", "../app.routes"], function(exports_1, context_1) {
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
    var core_1, common_1, img_filter_pipe_1, router_1, app_routes_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (img_filter_pipe_1_1) {
                img_filter_pipe_1 = img_filter_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.filtername = "";
                    this.list = app_routes_1.MENU_ITEMS;
                }
                HomeComponent.prototype.routerOnActivate = function (next, prev) {
                    console.log('hello');
                    this.log = "Finished navigating from \"" + (prev ? prev.urlPath : 'null') + "\" to \"" + next.urlPath + "\"";
                    this.next = next;
                    this.prev = prev;
                };
                HomeComponent.prototype.goback = function () {
                    this.routes.navigateByUrl(this.prev.urlPath);
                };
                HomeComponent.prototype.toggleMenu = function () {
                    this.showMenu = !this.showMenu;
                };
                HomeComponent.prototype.openRoute = function (itemEscolhido) {
                    this.showMenu = false;
                };
                HomeComponent.prototype.myValueChange = function ($event) {
                    // result: { value: <number> }
                    console.log($event);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HomeComponent.prototype, "routes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HomeComponent.prototype, "list", void 0);
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
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        pipes: [img_filter_pipe_1.ImgFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map