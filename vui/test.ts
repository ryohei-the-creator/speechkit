import { SpeechKit } from '../vui/speech/speechkit';
import { audio, prosody, sayas } from '../vui/speech/constant';

const speechkit = new SpeechKit()

// speechkit.audio({
//     [audio.src]: 'https://helloworld.mp3',
//     [audio.soundLevel]: "15"
// });
speechkit.sayAs('アイウエオ', sayas.expletive);
speechkit.prosody({
    [prosody.pitch]: -20,
    [prosody.rate]: 110
}, 'うううう。声が枯れてしまったようだ...');
speechkit.emphasis('high', 'ヤッホ！');
speechkit.sayAs('こんな感じで読み上げることができます。', sayas.cardinal)
const simpleresponse = speechkit.createSimpleResponse();
console.dir(simpleresponse);
