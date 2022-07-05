"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipesModule = void 0;
var common_1 = require("@nestjs/common");
var recipes_service_1 = require("./recipes.service");
var recipes_resolver_1 = require("./recipes.resolver");
var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule_1 = RecipesModule;
    var RecipesModule_1;
    RecipesModule = RecipesModule_1 = __decorate([
        (0, common_1.Module)({
            imports: [RecipesModule_1],
            providers: [recipes_service_1.RecipesService, recipes_resolver_1.RecipesResolver]
        })
    ], RecipesModule);
    return RecipesModule;
}());
exports.RecipesModule = RecipesModule;
