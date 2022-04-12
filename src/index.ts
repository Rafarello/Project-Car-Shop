import server from './server';
import CarsRouter from './routers/CarsRouter';

// Adicionando as rotas da API através da função addRouter
// CarsRouter já foi importado como CarsRouter.router

server.addRouter(CarsRouter);

// Comando para iniciar a API
// Melhor visualização no arquivo app.ts

server.startServer();