export default interface iVehicleCar {

    startVehicle(): void;
    configure(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number,
    ): void;
}