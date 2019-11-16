// Enum
import { AudioParams } from './audiomanager';
import { SayAs } from './sayasmanager';
import { Prosody } from './prosodymanager';

const enums = {
    audio: AudioParams,
    sayas: SayAs,
    prosody: Prosody
}

export const sayas = enums.sayas;
export const audio = enums.audio
export const prosody = enums.prosody