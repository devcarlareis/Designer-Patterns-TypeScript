import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log('Token: ' + this.token.getToken());
        console.log('Enviamos o pagamento via Mercado Pago');
    }
    receivePayment(): void {
        console.log('Recebemos o pagamentos via Mercado Pago')
    }

}