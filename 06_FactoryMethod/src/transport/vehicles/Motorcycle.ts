import IVehicle from "./interface/IVehicle";

export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCarga();
        console.log('iniciando o trajeto...')
    }
    getCarga(): void {
       console.log('Pegamos a encomenda')
    }

}