import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import ILandVehicles from "../land/interface/ILandVehicles";
import ITransportFactory from "./interface/ITransportFactory";

export default class UberTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicles {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new  Airplane();
    }
    
}