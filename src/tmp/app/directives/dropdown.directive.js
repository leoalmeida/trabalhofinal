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
 * Created by LeonardoAlmeida on 08/05/16.
 */
var core_1 = require('@angular/core');
var DropdownValue = (function () {
    function DropdownValue(value, label) {
        this.value = value;
        this.label = label;
    }
    return DropdownValue;
}());
exports.DropdownValue = DropdownValue;
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.select = new core_1.EventEmitter();
    }
    DropdownComponent.prototype.selectItem = function (value) {
        this.select.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "values", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownComponent.prototype, "select", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'tags',
            template: "\n    <ul>\n      <li *ngFor=\"#value of values\" (click)=\"selectItem(value.value)\">{{value.label}}</li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;

//# sourceMappingURL=dropdown.directive.js.map
