"use strict";
exports.__esModule = true;
exports.RecipesService = void 0;
var RecipesService = /** @class */ (function () {
    function RecipesService() {
    }
    RecipesService.prototype.findOneById = function (id) {
        return {
            id: id,
            name: 'A product',
            price: 123,
            lastUpdated: '2022-02-02T00:00:00'
        };
    };
    RecipesService.prototype.findAll = function () {
        return [];
    };
    return RecipesService;
}());
exports.RecipesService = RecipesService;
