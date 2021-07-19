import IVehiclerMotorcycle from "./IVehicleMotorcycle";
import IVehicles from "./IVehicles";


export default class Motorcycle implements  IVehiclerMotorcycle, IVehicles {

    constructor(
        color: string,
        year: number,
        engine: number,
    ){
        this.configurationMotorcycle(color, year, engine);
        }

    startVehicles(): void {
        console.log('Ligando os motores');
    }

    configurationMotorcycle(color: string, year: number, engine: number): void {
        console.log(`Uma moto da cor ${color}, do ano ${year}, com ${engine} cilindradas`);
    }
    
}