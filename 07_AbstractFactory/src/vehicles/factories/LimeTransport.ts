import Drones from "../aerial/Drones";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicles from "../land/interface/ILandVehicles";
import Patinetes from "../land/Patinetes";
import ITransportFactory from "./interface/ITransportFactory";

export default class LimeTranspost implements ITransportFactory {
    createTransportVehicle(): ILandVehicles {
        return new Patinetes();
    }
    createTransportAircraft(): IAircraft {
        return new Drones();
    }

}