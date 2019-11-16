
import { AudioManager } from './audiomanager';
import { SayAsManager } from './sayasmanager';
import { ProsodyManager } from './prosodymanager';
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
        const audioManager = new AudioManager()
        audioManager.selectParams(parameters)
        const format = audioManager.createFormat()
        this.speechText += format
    }

    sayAs(text: string, type: any) {
        this.watcher = { 'sayas': true }
        const sayasManager = new SayAsManager()
        sayasManager.replaceTAG(type)
        sayasManager.replaceText(text)
        const format = sayasManager.createFormat();
        console.log(format)
        this.speechText += format;
        this.displayText += text + ' ';
    }
    
    prosody(parameters: any, text: string) {
        this.watcher = { 'prosody': true }
        const prosodyManager = new ProsodyManager();
        prosodyManager.selectParams(parameters);
        prosodyManager.replaceText(text)
        const format = prosodyManager.createFormat()
        this.speechText += format;
        this.displayText += text + ' ';
    }

    emphasis(level: any, text: string) {
        // strong, moderate, none, reduced
        this.speechText += `<emphasis level="${level}">${text}</emphasis>`
    }

    pause(timer: number) {
        this.watcher = { 'pause': true }
        this.speechText += `<break time="${timer}" />`
    }

    sub(paraphrase: string, word: string) {
        // example: <sub alias="にっぽんばし">日本橋</sub>
        this.speechText += `<sub alias="${paraphrase}">${word}</sub>`
    }

    createSimpleResponse() {
        const lastType = Object.keys(this.watcher)[0];
        this.watcher = {};
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
