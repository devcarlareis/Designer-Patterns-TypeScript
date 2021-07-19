export default interface iVehicleMotorcycle {

    startVehicle(): void;
    configure(
        color: string,
        year: number,
        engine: number,
    ): void;
}