import ILandVehicles from "./interface/ILandVehicles";

export default class Patinetes implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
        console.log('Iniciando entrega de patinete...');
    }
    getCargo(): void {
        console.log('Já pegamos a encomenda');
    }
    
}