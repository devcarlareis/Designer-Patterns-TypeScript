import IPlatform from "../platforms/IPLatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform);
    }

    subtitles(): void {
        console.log('Legendas Ativadas na transmissão');
    }

    comments(): void {
        console.log('Comentarios liberados na live');
    }
}