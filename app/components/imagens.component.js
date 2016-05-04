System.register(['angular2/core', "angular2/common", "../filters/img-filter.pipe", "angular2/router", "../app.routes", 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, common_1, img_filter_pipe_1, router_1, app_routes_1, ng2_bs3_modal_1;
    var ImagensComponent;
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
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            ImagensComponent = (function () {
                function ImagensComponent() {
                    this.filtername = "";
                    this.imageList = app_routes_1.IMAGE_ITEMS;
                }
                ImagensComponent.prototype.close = function () {
                    this.modal.close();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ImagensComponent.prototype, "filtername", void 0);
                ImagensComponent = __decorate([
                    core_1.Component({
                        selector: 'imagens',
                        templateUrl: 'app/templates/imagens.html',
                        styleUrls: ['app/stylesheets/imagens.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES],
                        pipes: [img_filter_pipe_1.ImgFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImagensComponent);
                return ImagensComponent;
            }());
            exports_1("ImagensComponent", ImagensComponent);
        }
    }
});
//# sourceMappingURL=imagens.component.js.map