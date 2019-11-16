"use strict";
exports.__esModule = true;
var audiomanager_1 = require("./audiomanager");
var sayasmanager_1 = require("./sayasmanager");
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.audioManager = new audiomanager_1.AudioManager();
        this.sayasManager = new sayasmanager_1.SayAsManager();
    }
    return Singleton;
}());
exports.singleton = new Singleton();
