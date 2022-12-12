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
var chalk_animation_1 = require("chalk-animation");
var numberGuessingGame = function () { return __awaiter(void 0, void 0, void 0, function () {
    var wait, welcome, userNumber, askNumber, matchingNum, counter, index, zeroGuesser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wait = function (sec) {
                    if (sec === void 0) { sec = 2000; }
                    // Wait for welcome message
                    return new Promise(function (resolve) { return setTimeout(resolve, sec); });
                };
                welcome = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var rainbow, pulse, karaoke;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    rainbow = chalk_animation_1["default"].rainbow("Number guessing game !");
                                    return [4 /*yield*/, wait()];
                                case 1:
                                    _a.sent();
                                    rainbow.stop();
                                    pulse = chalk_animation_1["default"].pulse("\tGame rules are given below : ");
                                    return [4 /*yield*/, wait()];
                                case 2:
                                    _a.sent();
                                    pulse.stop();
                                    karaoke = chalk_animation_1["default"].karaoke("\t\tYou have to enter number between 1 to 10 for game playing or 0 for exit\n\t\tIf you will get more than 5 point, You won the match \n\t\tIf you will get 5 or less than 5 point you will loose the game");
                                    return [4 /*yield*/, wait()];
                                case 3:
                                    _a.sent();
                                    karaoke.stop();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return [4 /*yield*/, welcome()];
            case 1:
                _a.sent();
                userNumber = null;
                askNumber = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var num;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                                        //destructuring used here
                                        name: "num",
                                        type: "number",
                                        message: "Enter any number between 1 t0 10 or 0 for exit"
                                    })];
                                case 1:
                                    num = (_a.sent()).num;
                                    if (num === 0) {
                                        console.log("num", num);
                                        return [2 /*return*/, 0];
                                    }
                                    else {
                                        userNumber = num;
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return [4 /*yield*/, askNumber()];
            case 2:
                _a.sent();
                counter = 0;
                index = 0;
                _a.label = 3;
            case 3:
                if (!(index < 10)) return [3 /*break*/, 6];
                return [4 /*yield*/, askNumber()];
            case 4:
                zeroGuesser = _a.sent();
                if (zeroGuesser == 0) {
                    return [2 /*return*/];
                }
                matchingNum = Math.round(Math.random() * 10);
                if (matchingNum === userNumber) {
                    counter++;
                }
                _a.label = 5;
            case 5:
                index++;
                return [3 /*break*/, 3];
            case 6:
                if (counter > 5) {
                    console.log("Congratulations ! you won the game with ".concat(counter, " points"));
                }
                else {
                    console.log("Your Points: ".concat(counter, " \n Alas! you lose the game from ").concat(5 - counter, " points"));
                }
                return [2 /*return*/];
        }
    });
}); };
numberGuessingGame();
