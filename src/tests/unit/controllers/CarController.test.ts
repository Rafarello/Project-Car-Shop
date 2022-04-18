// import * as sinon from 'sinon';
// import chai from 'chai';
// import chaiHttp = require('chai-http');
// import MockController from '../mock/MockController'


// import CarsController from '../../../controllers/CarsController';
// import { RequestWithBody, ResponseError } from '../../../controllers';
// import { Car } from '../../../interfaces/CarInterface';
// import { Request, Response } from 'express';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Teste unitário do "CarsController" se é possível criar um novo carro no banco de dados com os dados corretos', () => {
  
//   const body = MockController.mockGoodBodyRequest;
//   let res: Response
//   let req: Request
//   before(async () => {
//     req = { body } as RequestWithBody<Car>  

//     // res.status = sinon.stub().returns(res)
//     // res.json = sinon.stub().returns(res)

//     // sinon
//     //   .stub(CarsController.service, "create")
//     //   .resolves(MockController.mockNewCar);
    
    
//   });

//   after(() => {
//     sinon.restore();
//   })

//   it('Deve criar e retornar um objeto com "_id" e as informações do carro', async () => {
//     await CarsController.create(req, res) 
//     console.log(res);
    
    
    
//   });

// });