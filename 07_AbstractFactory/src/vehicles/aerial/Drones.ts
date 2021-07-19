import IAircraft from "./interfaces/IAircraft";

export default class Drones implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
         console.log('Iniciando a decolagem');
    }
    getCargo(): void {
        console.log('Carga em posição. Ligando Drone');
    }
    checkWind(): void {
        console.log('Ventos a 25km, Sudeste, ventos ok!');
    }
    
}