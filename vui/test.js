"use strict";
var _a, _b;
exports.__esModule = true;
var speechkit_1 = require("../vui/speech/speechkit");
var constant_1 = require("../vui/speech/constant");
exports.say = constant_1.enums.sayas;
exports.audio = constant_1.enums.audio;
var speechkit = new speechkit_1.SpeechKit();
var parameters = (_a = {},
    _a[constant_1.enums.audio.src] = 'https://helloworld.mp3',
    _a[constant_1.enums.audio.clipBegin] = true,
    _a[constant_1.enums.audio.soundLevel] = "15",
    _a);
speechkit.audio(parameters);
speechkit.text(' Hello', 'hello');
speechkit.pause(0.5);
speechkit.sayAs('this is a piece of text', exports.say.bleep);
speechkit.text('people', 'people :)');
speechkit.sayAs('this is a piece of text', exports.say.characters);
var simpleresponse = speechkit.createSimpleResponse();
console.dir(simpleresponse);
var speechkit2 = new speechkit_1.SpeechKit();
var parameters2 = (_b = {},
    _b[constant_1.enums.audio.src] = 'https://helloworld.mp3',
    _b[constant_1.enums.audio.clipBegin] = true,
    _b[constant_1.enums.audio.soundLevel] = "15",
    _b);
speechkit2.audio(parameters2);
speechkit2.text(' Hello', 'hello');
speechkit2.pause(0.5);
speechkit2.sayAs('this is a piece of text', exports.say.bleep);
speechkit2.text('people', 'people :)');
speechkit2.sayAs('this is a piece of text', exports.say.characters);
var simpleresponse2 = speechkit.createSimpleResponse();
console.dir(simpleresponse2);
