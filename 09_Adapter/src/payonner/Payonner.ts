import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    
    sendPayment(): void {
        this.token = this.authToken();
        console.log('Token: ' + this.token.getToken());
        console.log('Enviamos o pagamento via Payonner');
    }

    receivePayment(): void {
        console.log('Recebemos o pagamentos via Payonner')
    }
    
}