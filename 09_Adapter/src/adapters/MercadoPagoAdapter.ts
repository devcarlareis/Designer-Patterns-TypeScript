import MercadoPago from "../MercadoPago/MercadoPago";
import IPayPalPayments from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments {

    private token: Token;
    
    constructor(private mercadoPago: MercadoPago) {
        console.log("Adaptando o Mercado Pago utilizando os métodos padrões do PayPal.");
    }

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        return this.mercadoPago.sendPayment();
    }

    paypalReceive(): void {
        return this.mercadoPago.receivePayment();
    }

}