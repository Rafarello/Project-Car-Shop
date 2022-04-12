import App from './app';
import CarsRouter from './routers/CarsRouter';

const server = new App();

server.addRouter(CarsRouter);

export default server;