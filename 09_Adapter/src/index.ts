import IPayPalPayment from "./paypal/IPaypalPayment";
import PayPal from "./paypal/PayPal";

const payment : IPayPalPayment = new PayPal();

payment.paypalPayment();
payment.paypalReceive();
