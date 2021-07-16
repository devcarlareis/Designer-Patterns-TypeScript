import IVehicle from "./interface/IVehicle";

export default class Bicycle implements IVehicle {
    startRoute(): void {
        this.getCarga();
        console.log('iniciando o trajeto na rodovia de bicicleta...')
    }
    getCarga(): void {
       console.log('Pegamos a encomenda de bicicleta')
    }

}