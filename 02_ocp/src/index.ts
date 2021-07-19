import TypeVehicles from './TypeVehicles';
import Car from './vehicles/Car';
import Motorcycle from './vehicles/Motorcycle';

const type = TypeVehicles.CAR;
let vehicle;

if (type === TypeVehicles.CAR) {
    vehicle = new Car('Amarelo', 2022, 2.0, 4, 4);
} else if (type === TypeVehicles.MOTORCYCLE) {
    vehicle = new Motorcycle('Amarelo', 2022, 2.2);
}