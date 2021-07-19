import IAircraft from "./interfaces/IAircraft";


export default class Airplane implements IAircraft {
    startRoute(): void {
       this.checkWind();
       this.getCargo();
        console.log('Iniciando a decolagem');
    }
    getCargo(): void {
        console.log('pegamos os passageiros, estamos prontos')
    }
    checkWind(): void {
        console.log('Ventos a 25km, ventos ok!');
    }
    
}