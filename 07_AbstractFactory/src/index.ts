import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interface/ITransportFactory";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany = Company.UBER;
let factory: ITransportFactory;

switch(currentCompany) {
    case Company.UBER: 
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    default:
        console.error('Desonhecida');
}

const client = new Client(factory);

client.startRoute();