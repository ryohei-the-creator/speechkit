
// The following are the currently supported settings for audio:

// Format: MP3 (MPEG v2)
    // 24K samples per second
    // 24K ~ 96K bits per second, fixed rate

// Format: Opus in Ogg
    // 24K samples per second (super-wideband)
    // 24K - 96K bits per second, fixed rate

// Format (deprecated): WAV (RIFF)
    // PCM 16-bit signed, little endian
    // 24K samples per second

// For all formats:
    // Single channel is preferred, but stereo is acceptable.
    // 240 seconds maximum duration. If you want to play audio with a longer duration, consider implementing a media response.
    // 5 megabyte file size limit.
    // Source URL must use HTTPS protocol.
    // Our UserAgent when fetching the audio is "Google-Speech-Actions".

export enum AudioParams {
    src = 'src="__src__"',
    soundLevel = 'soundLevel="__soundLevel__dB"',
    clipBegin = 'clipBegin=__clipBegin__',
    clipEnd = '__clipEnd__',
    speed = 'speed=__speed__%',
    repeatCount = 'repeatCount=__repeatCount__',
    repeatDur = 'repeatDur=__repeatDur__'
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
