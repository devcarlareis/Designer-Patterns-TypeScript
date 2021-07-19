import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factories/interface/ITransportFactory";
import ILandVehicles from "../land/interface/ILandVehicles";

export default class Client {

    private vehicle: ILandVehicles;
    private aircraft: IAircraft;
    constructor(factory: ITransportFactory ) {
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}