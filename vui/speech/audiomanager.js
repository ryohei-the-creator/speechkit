"use strict";
exports.__esModule = true;
var AudioParams;
(function (AudioParams) {
    AudioParams["src"] = "src=\"__src__\"";
    AudioParams["soundLevel"] = "soundLevel=\"__soundLevel__dB\"";
    AudioParams["clipBegin"] = "clipBegin=__clipBegin__";
})(AudioParams = exports.AudioParams || (exports.AudioParams = {}));
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.audioFormat = "<audio __TAG__></audio>";
    }
    AudioManager.prototype.selectParams = function (params) {
        var format = [];
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            console.log(key + " -> " + params[key]);
            var value = params[key];
            console.log('This is key: ', key, value);
            var object_key = key.split("=")[0];
            key = key.replace("__" + object_key + "__", value);
            console.log(key);
            format.push(key);
            format.push(" ");
        }
        format.pop();
        var finished = format.join('');
        console.log(finished);
        this.audioFormat = this.audioFormat.replace(AudioManager.TAG, finished);
        console.log(this.audioFormat);
    };
    AudioManager.prototype.createFormat = function () {
        return this.audioFormat;
    };
    AudioManager.TAG = '__TAG__';
    return AudioManager;
}());
exports.AudioManager = AudioManager;
