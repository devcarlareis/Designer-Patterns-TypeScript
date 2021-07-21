import Token from "../utils/Token";
import IPayPalPayment from "./IPaypalPayment";

export default class PayPal implements IPayPalPayment {
    private token: Token;

    paypalPayment(): void {
        this.token = this.authToken();
        console.log('Token: ' + this.token.getToken());
        console.log('Enviamos o pagemento via PayPal');
    }
    paypalReceive(): void {
       console.log('Recebemos o pagamentos via PayPal')
    }
    authToken(): Token {
        return new Token();
    }
    
}