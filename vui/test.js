"use strict";
var _a;
exports.__esModule = true;
var speechkit_1 = require("../vui/speech/speechkit");
var constant_1 = require("../vui/speech/constant");
var speechkit = new speechkit_1.SpeechKit();
// speechkit.audio({
//     [audio.src]: 'https://helloworld.mp3',
//     [audio.soundLevel]: "15"
// });
speechkit.sayAs('アイウエオ', constant_1.sayas.expletive);
speechkit.prosody((_a = {},
    _a[constant_1.prosody.pitch] = -20,
    _a[constant_1.prosody.rate] = 110,
    _a), 'うううう。声が枯れてしまったようだ...');
speechkit.emphasis('high', 'ヤッホ！');
speechkit.sayAs('こんな感じで読み上げることができます。', constant_1.sayas.cardinal);
var simpleresponse = speechkit.createSimpleResponse();
console.dir(simpleresponse);
