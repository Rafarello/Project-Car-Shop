import App from './app';
import CarsRouter from './routers/CarsRouter';

const server = new App();

// Adicionando as rotas da API através da função addRouter
// CarsRouter já foi importado como CarsRouter.router

server.addRouter(CarsRouter);

export default server;