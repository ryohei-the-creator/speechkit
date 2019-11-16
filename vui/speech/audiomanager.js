"use strict";
// The following are the currently supported settings for audio:
exports.__esModule = true;
// Format: MP3 (MPEG v2)
// 24K samples per second
// 24K ~ 96K bits per second, fixed rate
// Format: Opus in Ogg
// 24K samples per second (super-wideband)
// 24K - 96K bits per second, fixed rate
// Format (deprecated): WAV (RIFF)
// PCM 16-bit signed, little endian
// 24K samples per second
// For all formats:
// Single channel is preferred, but stereo is acceptable.
// 240 seconds maximum duration. If you want to play audio with a longer duration, consider implementing a media response.
// 5 megabyte file size limit.
// Source URL must use HTTPS protocol.
// Our UserAgent when fetching the audio is "Google-Speech-Actions".
var AudioParams;
(function (AudioParams) {
    AudioParams["src"] = "src=\"__src__\"";
    AudioParams["soundLevel"] = "soundLevel=\"__soundLevel__dB\"";
    AudioParams["clipBegin"] = "clipBegin=__clipBegin__";
    AudioParams["clipEnd"] = "__clipEnd__";
    AudioParams["speed"] = "speed=__speed__%";
    AudioParams["repeatCount"] = "repeatCount=__repeatCount__";
    AudioParams["repeatDur"] = "repeatDur=__repeatDur__";
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
