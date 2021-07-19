import ILandVehicles from "./interface/ILandVehicles";

export default class Car implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
        console.log('Iniciando o trajeto');
    }
    getCargo(): void {
        console.log('Pegamos os passageiros');
    }
    
}