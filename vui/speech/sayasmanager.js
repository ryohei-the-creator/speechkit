"use strict";
exports.__esModule = true;
var SayAs;
(function (SayAs) {
    SayAs["cardinal"] = "cardinal";
    SayAs["ordinal"] = "ordinal";
    SayAs["characters"] = "characters";
    SayAs["fraction"] = "fraction";
    SayAs["expletive"] = "expletive";
    SayAs["bleep"] = "bleep";
    SayAs["unit"] = "unit";
    SayAs["verbatim"] = "verbatim";
    SayAs["spellout"] = "spellout";
    SayAs["date"] = "date";
    SayAs["telephone"] = "telephone";
})(SayAs = exports.SayAs || (exports.SayAs = {}));
var SayAsManager = /** @class */ (function () {
    function SayAsManager() {
        this.audioFormat = "<say-as interpret-as=\"__TAG__\">__TEXT__</say-as>";
    }
    SayAsManager.prototype.replaceTAG = function (type) {
        this.audioFormat = this.audioFormat.split(SayAsManager.TAG).join(type);
    };
    SayAsManager.prototype.replaceText = function (text) {
        this.audioFormat = this.audioFormat.split(SayAsManager.TEXT).join(text);
    };
    SayAsManager.prototype.createFormat = function () {
        return this.audioFormat;
    };
    SayAsManager.TAG = '__TAG__';
    SayAsManager.TEXT = '__TEXT__';
    return SayAsManager;
}());
exports.SayAsManager = SayAsManager;
