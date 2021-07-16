import  Transport from  './transport/Transport';
import CarTransport from './transport/CarTransport';
import MotorcycleTransport from './transport/MotorcycleTransport';

declare var process;

let transport: Transport;

if (process.argv.includes('--uber')) {
    transport = new CarTransport();
} else if (process.argv.includes('--log')){
transport = new MotorcycleTransport();
} else {
    console.error('Selecione o tipo de entrega');
}

if (transport) {
    transport.startTransport();
}