System.register(['angular2/core', 'angular2/router', './app.routes', "./components/home.component", "./components/navbar.component"], function(exports_1, context_1) {
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
    var core_1, router_1, app_routes_1, home_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.searchText = " ";
                    this.showSearch = false;
                    this.appRoutes = app_routes_1.APP_ROUTES;
                    this.menuItems = app_routes_1.MENU_ITEMS;
                    this.showMenu = true;
                }
                AppComponent.prototype.routerOnActivate = function (next, prev) {
                    console.log('hello');
                    this.log = "Finished navigating from \"" + (prev ? prev.urlPath : 'null') + "\" to \"" + next.urlPath + "\"";
                    this.next = next;
                    this.prev = prev;
                };
                AppComponent.prototype.goback = function () {
                    this.routes.navigateByUrl(this.prev.urlPath);
                };
                AppComponent.prototype.toggle = function () {
                    this.showSearch = !this.showSearch;
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/home']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/templates/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, home_component_1.HomeComponent]
                    }),
                    router_1.RouteConfig(app_routes_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map