"use strict";
exports.__esModule = true;
var audiomanager_1 = require("./audiomanager");
var sayasmanager_1 = require("./sayasmanager");
var prosodymanager_1 = require("./prosodymanager");
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
        var audioManager = new audiomanager_1.AudioManager();
        audioManager.selectParams(parameters);
        var format = audioManager.createFormat();
        this.speechText += format;
    };
    SpeechKit.prototype.sayAs = function (text, type) {
        this.watcher = { 'sayas': true };
        var sayasManager = new sayasmanager_1.SayAsManager();
        sayasManager.replaceTAG(type);
        sayasManager.replaceText(text);
        var format = sayasManager.createFormat();
        console.log(format);
        this.speechText += format;
        this.displayText += text + ' ';
    };
    SpeechKit.prototype.prosody = function (parameters, text) {
        this.watcher = { 'prosody': true };
        var prosodyManager = new prosodymanager_1.ProsodyManager();
        prosodyManager.selectParams(parameters);
        prosodyManager.replaceText(text);
        var format = prosodyManager.createFormat();
        this.speechText += format;
        this.displayText += text + ' ';
    };
    SpeechKit.prototype.emphasis = function (level, text) {
        // strong, moderate, none, reduced
        this.speechText += "<emphasis level=\"" + level + "\">" + text + "</emphasis>";
    };
    SpeechKit.prototype.pause = function (timer) {
        this.watcher = { 'pause': true };
        this.speechText += "<break time=\"" + timer + "\" />";
    };
    SpeechKit.prototype.sub = function (paraphrase, word) {
        // example: <sub alias="にっぽんばし">日本橋</sub>
        this.speechText += "<sub alias=\"" + paraphrase + "\">" + word + "</sub>";
    };
    SpeechKit.prototype.createSimpleResponse = function () {
        var lastType = Object.keys(this.watcher)[0];
        this.watcher = {};
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
