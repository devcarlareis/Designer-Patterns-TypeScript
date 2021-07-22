import IPlatform from "./IPLatform";

export default class TwitchTV implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log('Twitch: Transmissão foi iniciada!')
    }

    configureRMTP(): void {
        this.authToken();
        console.log('Twitch: Configurando o broadcasting');
    }
    authToken(): void {
        console.log('Twitch: Autorizando a aplicação!')
    }
    
    
}