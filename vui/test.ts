import { SpeechKit } from '../vui/speech/speechkit';
import { enums } from '../vui/speech/constant';

export const say = enums.sayas;
export const audio = enums.audio

const speechkit = new SpeechKit()

const parameters = {
    [enums.audio.src]: 'https://helloworld.mp3',
    [enums.audio.clipBegin]: true,
    [enums.audio.soundLevel]: "15"
}

speechkit.audio(parameters)
speechkit.text(' Hello', 'hello')
speechkit.pause(0.5)
speechkit.sayAs('this is a piece of text', say.bleep)
speechkit.text('people', 'people :)')
speechkit.sayAs('this is a piece of text', say.characters)
const simpleresponse = speechkit.createSimpleResponse();
console.dir(simpleresponse);
