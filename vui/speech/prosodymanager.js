"use strict";
// https://www.w3.org/TR/speech-synthesis11/#S3.2.4
exports.__esModule = true;
var Prosody;
(function (Prosody) {
    Prosody["rate"] = "rate=\"__rate__%\"";
    Prosody["pitch"] = "pitch=\"__pitch__st\"";
})(Prosody = exports.Prosody || (exports.Prosody = {}));
var ProsodyManager = /** @class */ (function () {
    function ProsodyManager() {
        this.prosodyFormat = "<prosody __TAG__>__TEXT__</prosody>";
    }
    ProsodyManager.prototype.selectParams = function (params) {
        var format = [];
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            console.log(key + " -> " + params[key]);
            var value = params[key];
            console.log('This is key: ', key, value);
            var object_key = key.split("=")[0];
            key = key.replace("__" + object_key + "__", "" + value);
            console.log(key);
            format.push(key);
            format.push(' ');
        }
        format.pop();
        var finished = format.join('');
        console.log(finished);
        this.prosodyFormat = this.prosodyFormat.replace(ProsodyManager.TAG, finished);
        console.log(this.prosodyFormat);
    };
    ProsodyManager.prototype.replaceText = function (text) {
        this.prosodyFormat = this.prosodyFormat.split(ProsodyManager.TEXT).join(text);
    };
    ProsodyManager.prototype.createFormat = function () {
        return this.prosodyFormat;
    };
    ProsodyManager.TAG = '__TAG__';
    ProsodyManager.TEXT = '__TEXT__';
    return ProsodyManager;
}());
exports.ProsodyManager = ProsodyManager;
