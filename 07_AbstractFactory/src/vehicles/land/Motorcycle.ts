import ILandVehicles from "./interface/ILandVehicles";

export default class Motorcycle implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
        console.log('Iniciando entrega...');
    }
    getCargo(): void {
        console.log('Já pegamos a encomenda');
    }
    
}