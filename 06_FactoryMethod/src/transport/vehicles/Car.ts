import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle {
    getCarga(): void {
        console.log('Pegamos os passageiros, estamos prontos!')
    }
    startRoute(): void {
        this.getCarga();
        console.log('iniciando o trajeto');
    }
    
}