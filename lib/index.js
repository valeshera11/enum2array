"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enum2array = void 0;
var array_value_1 = require("./array-value");
function enum2array(enumObject) {
    if (Object.keys(enumObject).some(function (value) { return Number(value); })) {
        return Object.keys(enumObject)
            .filter(function (value) { return isNaN(Number(value)) === false; })
            .map(function (key) { return new array_value_1.ArrayValue(enumObject[key], Number(key)); });
    }
    return Object.keys(enumObject).map(function (key) { return new array_value_1.ArrayValue(key, enumObject[key]); });
}
exports.enum2array = enum2array;
