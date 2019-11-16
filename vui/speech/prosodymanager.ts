
// https://www.w3.org/TR/speech-synthesis11/#S3.2.4

export enum Prosody {
    rate = 'rate="__rate__%"',
    pitch = 'pitch="__pitch__st"'
}

export class ProsodyManager {

    public prosodyFormat: string
    public static readonly TAG = '__TAG__';
    public static readonly TEXT = '__TEXT__';

    constructor() {
        this.prosodyFormat = `<prosody __TAG__>__TEXT__</prosody>`
    }

    selectParams(params: any) {
        let format = [];
        for (var key of Object.keys(params)) {
            console.log(key + " -> " + params[key])
            const value = params[key]
            console.log('This is key: ', key, value)
            const object_key = key.split(`=`)[0]
            key = key.replace(`__${object_key}__`, `${value}`)
            console.log(key)
            format.push(key);
            format.push(' ');
        }
        format.pop()
        const finished = format.join('')
        console.log(finished)
        this.prosodyFormat = this.prosodyFormat.replace(ProsodyManager.TAG, finished)
        console.log(this.prosodyFormat)
    }
    

    replaceText(text: string) {
        this.prosodyFormat = this.prosodyFormat.split(ProsodyManager.TEXT).join(text)
    }

    createFormat() {
        return this.prosodyFormat
    }
}
