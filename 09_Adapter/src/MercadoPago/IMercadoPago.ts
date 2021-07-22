import Token from "../utils/Token";

export default interface IMercadoPago {
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}