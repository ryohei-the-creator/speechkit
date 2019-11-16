export enum AudioParams {
    src = 'src="__src__"',
    soundLevel = 'soundLevel="__soundLevel__dB"',
    clipBegin = 'clipBegin=__clipBegin__',
}

export class AudioManager {

    public audioFormat: string
    public static readonly TAG = '__TAG__';

    constructor() {
        this.audioFormat = `<audio __TAG__></audio>`
    }

    selectParams(params: any) {
        let format = [];
        for (var key of Object.keys(params)) {
            console.log(key + " -> " + params[key])
            const value = params[key]
            console.log('This is key: ', key, value)
            const object_key = key.split(`=`)[0]
            key = key.replace(`__${object_key}__`, value)
            console.log(key)
            format.push(key);
            format.push(" ");
        }
        format.pop()
        const finished = format.join('')
        console.log(finished)
        this.audioFormat = this.audioFormat.replace(AudioManager.TAG, finished)
        console.log(this.audioFormat)
    }
    

    createFormat() {
        return this.audioFormat
    }
}
