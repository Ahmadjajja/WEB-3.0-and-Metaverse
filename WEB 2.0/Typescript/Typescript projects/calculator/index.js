#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var inquirer_1 = require("inquirer"); // uses for taking input in the form question or in simple way
var chalk_1 = require("chalk");
var chalk_animation_1 = require("chalk-animation");
var calculator = function () {
    var wait = function (sec) {
        if (sec === void 0) { sec = 2000; }
        return new Promise(function (resolve) { return setTimeout(resolve, sec); });
    };
    var welcome = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rainbow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rainbow = chalk_animation_1["default"].rainbow("Welcome to my calculator CLI App");
                        //waits 2000 seconds
                        return [4 /*yield*/, wait()];
                    case 1:
                        //waits 2000 seconds
                        _a.sent();
                        rainbow.stop();
                        return [2 /*return*/];
                }
            });
        });
    };
    //takes the user input
    var firstNumber;
    var secondNumber;
    var operator;
    var askNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var num1, num2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                            name: "firstNumber",
                            type: "number",
                            message: "Enter first Number"
                        })];
                    case 1:
                        num1 = _a.sent();
                        return [4 /*yield*/, inquirer_1["default"].prompt({
                                name: "secondNumber",
                                type: "number",
                                message: "Enter second Number"
                            })];
                    case 2:
                        num2 = _a.sent();
                        firstNumber = num1.firstNumber;
                        secondNumber = num2.secondNumber;
                        return [2 /*return*/];
                }
            });
        });
    };
    var promptOperations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                            name: "operator",
                            type: "list",
                            message: "Select Operation:",
                            choices: ["/", "*", "+", "-"]
                        })];
                    case 1:
                        operation = _a.sent();
                        operator = operation.operator;
                        return [2 /*return*/];
                }
            });
        });
    };
    var handleOperations = function (operator) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (operator) {
                    case "/":
                        result = firstNumber / secondNumber;
                        break;
                    case "*":
                        result = firstNumber * secondNumber;
                        break;
                    case "+":
                        result = firstNumber + secondNumber;
                        break;
                    case "-":
                        result = firstNumber - secondNumber;
                        break;
                    default:
                        break;
                }
                console.log(chalk_1["default"].blueBright(result));
                return [2 /*return*/];
            });
        });
    };
    //Continue calculation
    var continueCalc = function () { return __awaiter(void 0, void 0, void 0, function () {
        var continueProcess, userWantstoContinue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        name: "again",
                        type: "confirm",
                        message: "Do you want to continue ?"
                    })];
                case 1:
                    continueProcess = _a.sent();
                    userWantstoContinue = false;
                    userWantstoContinue = continueProcess.again;
                    if (!userWantstoContinue) return [3 /*break*/, 6];
                    return [4 /*yield*/, askNumber()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, promptOperations()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleOperations(operator)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, continueCalc()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6: return [2 /*return*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    console.clear();
    var render = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, welcome()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, askNumber()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, promptOperations()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleOperations(operator)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, continueCalc()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    render();
};
calculator();
