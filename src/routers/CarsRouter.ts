import CarsController from '../controllers/CarsController';
import { Car } from '../interfaces/CarInterface';
import CustomRouter from './Router';
// Código abaixo usado anteriormente em projeto Trybe Futebol Clube

// Vídeos usados como referência(no projeto TFC):
// # Como criar o Router com Class:
// # OBS: Vídeo incrível e super didático << rever novamente depois
// https://www.youtube.com/watch?v=muikWYU7SnE&ab_channel=HighTechCursosF%C3%A1bricadeProgramador
// # Como criar o Server/APP com Class:
// https://www.youtube.com/watch?v=EQlMDxnGZpA&ab_channel=HighTechCursosF%C3%A1bricadeProgramador

const CarsRouter = new CustomRouter<Car>();

CarsRouter.addRoute(CarsController);

export default CarsRouter.router;