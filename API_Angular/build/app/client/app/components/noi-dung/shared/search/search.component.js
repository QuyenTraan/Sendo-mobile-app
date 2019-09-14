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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.searchTrigger = new core_1.EventEmitter();
        this._searchValue = "";
        this._keyValue = 'search-bar';
        this.loadState();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getState = function () {
        return { name: 'tieu_de', value: this._searchValue };
    };
    SearchComponent.prototype.search = function () {
        this.saveState();
        this.searchTrigger.emit(this._searchValue);
    };
    SearchComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue, this._searchValue);
    };
    SearchComponent.prototype.loadState = function () {
        this._searchValue = this.manageStateService.load(this._keyValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchTrigger", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-bar',
            template: '<input [(ngModel)]="_searchValue" type="text" placeholder="tieu de" /> <button (click)="search()">Tim kiem</button>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map