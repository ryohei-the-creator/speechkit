
import { singleton } from './singleton';

export class SpeechKit {

    private speechText: string;
    private displayText: string;
    private watcher: { [key: string]: boolean };

    constructor() {
        this.speechText = ''
        this.displayText = ''
        this.watcher = {};
    }

    text(speechText: string, displayText: string) {
        this.watcher = { 'text': true }
        this.speechText += speechText + ' ';
        this.displayText += displayText  + ' ';
    }

    audio(parameters: any) {
        this.watcher = { 'audio': true }
        singleton.audioManager.selectParams(parameters)
    }
    
    pause(timer: number) {
        this.watcher = { 'pause': true }
        this.speechText += `<break time="${timer}" />`
    }

    sayAs(text: string, type: any) {
        this.watcher = { 'sayas': true }
        singleton.sayasManager.replaceTAG(type)
        singleton.sayasManager.replaceText(text)
        const format = singleton.sayasManager.createFormat();
        console.log(format)
        this.speechText += format;
        this.displayText += text;
    }

    createSimpleResponse() {
        const lastType = Object.keys(this.watcher)[0];
        console.log(lastType)
        if (lastType === 'text') {
            this.speechText = this.speechText.trim();
            this.displayText = this.displayText.trim();
        }
        return {
            speechText: '<speak>' + this.speechText + '</speak>',
            displayText: this.displayText
        }
    }

}
