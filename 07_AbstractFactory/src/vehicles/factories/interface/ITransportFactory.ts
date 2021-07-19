import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandVehicles from "../../land/interface/ILandVehicles";

export default interface ITransportFactory {
    createTransportVehicle(): ILandVehicles;
    createTransportAircraft(): IAircraft;
}