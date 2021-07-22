import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPaypalPayment";
import PayPal from "./paypal/PayPal";

//const payment : IPayPalPayment = new PayPal();
//const payment: IPayonnerPayment = new Payonner();
const payment: IPayPalPayment = new PayonnerAdapter(new Payonner())
payment.paypalPayment();
payment.paypalReceive();
//payment.sendPayment();
//payment.receivePayment();
