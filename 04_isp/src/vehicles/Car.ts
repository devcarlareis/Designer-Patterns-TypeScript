import IVehicleCar from "./IVehicleCar";
import IVehicles from "./IVehicles";

export default class Car implements IVehicleCar, IVehicles {
    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        
    ){
        this.configurationCar(color, year, engine, seats);
    }

    configurationCar(color: string, year: number, engine: number, seats: number): void {
        console.log(`Carro da cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} assentos`);
    }

    startVehicles(): void {
        throw new Error("Method not implemented.");
    }
}