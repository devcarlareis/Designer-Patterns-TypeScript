import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicles from "../land/interface/ILandVehicles";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNineTransport implements  ITransportFactory {
    createTransportVehicle(): ILandVehicles {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
    
}