"use strict";
exports.__esModule = true;
var singleton_1 = require("./singleton");
var SpeechKit = /** @class */ (function () {
    function SpeechKit() {
        this.speechText = '';
        this.displayText = '';
        this.watcher = {};
    }
    SpeechKit.prototype.text = function (speechText, displayText) {
        this.watcher = { 'text': true };
        this.speechText += speechText + ' ';
        this.displayText += displayText + ' ';
    };
    SpeechKit.prototype.audio = function (parameters) {
        this.watcher = { 'audio': true };
        singleton_1.singleton.audioManager.selectParams(parameters);
    };
    SpeechKit.prototype.pause = function (timer) {
        this.watcher = { 'pause': true };
        this.speechText += "<break time=\"" + timer + "\" />";
    };
    SpeechKit.prototype.sayAs = function (text, type) {
        this.watcher = { 'sayas': true };
        singleton_1.singleton.sayasManager.replaceTAG(type);
        singleton_1.singleton.sayasManager.replaceText(text);
        var format = singleton_1.singleton.sayasManager.createFormat();
        console.log(format);
        this.speechText += format;
        this.displayText += text;
    };
    SpeechKit.prototype.createSimpleResponse = function () {
        var lastType = Object.keys(this.watcher)[0];
        console.log(lastType);
        if (lastType === 'text') {
            this.speechText = this.speechText.trim();
            this.displayText = this.displayText.trim();
        }
        return {
            speechText: '<speak>' + this.speechText + '</speak>',
            displayText: this.displayText
        };
    };
    return SpeechKit;
}());
exports.SpeechKit = SpeechKit;
