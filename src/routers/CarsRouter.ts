import express = require('express');
import CarsController from '../controllers/CarsController';

// Código abaixo usado anteriormente em projeto Trybe Futebol Clube

// Vídeos usados como referência(no projeto TFC):
// # Como criar o Router com Class:
// # OBS: Vídeo incrível e super didático << rever novamente depois
// https://www.youtube.com/watch?v=muikWYU7SnE&ab_channel=HighTechCursosF%C3%A1bricadeProgramador
// # Como criar o Server/APP com Class:
// https://www.youtube.com/watch?v=EQlMDxnGZpA&ab_channel=HighTechCursosF%C3%A1bricadeProgramador

class CarsRoutes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post(
      '/cars',
      CarsController.create,
    );
    this.router.get(
      '/cars',
    );
  }
}

export default new CarsRoutes().router;