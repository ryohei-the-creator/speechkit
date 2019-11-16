export enum SayAs {
    cardinal = 'cardinal',
    ordinal = 'ordinal',
    characters = 'characters',
    fraction = 'fraction',
    expletive = 'expletive',
    bleep = 'bleep',
    unit = 'unit',
    verbatim = 'verbatim',
    spellout = 'spellout',
    date = 'date',
    telephone = 'telephone'
}

export class SayAsManager {

    public audioFormat: string
    public static readonly TAG = '__TAG__';
    public static readonly TEXT = '__TEXT__';

    constructor() {
        this.audioFormat = `<say-as interpret-as="__TAG__">__TEXT__</say-as>`
    }

    replaceTAG(type: SayAs) {
        this.audioFormat = this.audioFormat.split(SayAsManager.TAG).join(type)
    }

    replaceText(text: string) {
        this.audioFormat = this.audioFormat.split(SayAsManager.TEXT).join(text)
    }

    createFormat() {
        return this.audioFormat
    }
}
