
import { AudioManager } from './audiomanager';
import { SayAsManager } from './sayasmanager';

class Singleton {
    public audioManager: AudioManager;
    public sayasManager: SayAsManager;
    constructor() {
        this.audioManager = new AudioManager();
        this.sayasManager = new SayAsManager();
    }
}

export const singleton = new Singleton();