import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarsServices from '../../../services/CarsService';
import MockController from '../mock/MockController';
import clearCarsDatabase from '../utils/clearCarsDatabase';


import server from '../../../index'
import { Response } from 'supertest';
import CarsController from '../../../controllers/CarsController';

chai.use(chaiHttp);

const { expect } = chai;
const app = server.getApp()

describe('Testa a API se é possível criar um novo carro no banco de dados com os dados corretos', () => {
  
  const body = MockController.mockGoodBodyRequest;
  let res: Response;

  before(async () => {
    res = await chai
      .request(app)
      .post('/cars')
      .send(body) as Response    

    sinon
      .stub(CarsController.service, "create")
      .resolves(MockController.mockNewCar);
  });

  after(() => {
    sinon.restore();
  })

  it('Deve criar e retornar um objeto com "_id" e as informações do carro', async () => {
    
    expect(res.body).to.have.property('model', 'Ferrari Maranello');
    expect(res.body).to.have.property('year', 1963);
    expect(res.body).to.have.property('color', 'red');
    expect(res.body).to.have.property('buyValue', 3500000);
    expect(res.body).to.have.property('doorsQty', 2);
    expect(res.body).to.have.property('seatsQty', 2);
    expect(res.body).to.have.property('_id');
    expect(res.body['_id']).to.have.length(24);
  });
});

describe('Testa a API se é possível listar todos os carros com sucesso', () => {

  const firstPostBody = MockController.mockGoodBodyRequest;
  const secondPostBody = MockController.mockAnotherGoodBodyRequest;

  let res: Response;

  before(async () => {
    clearCarsDatabase();
  
    await chai
      .request(app)
      .post('/cars')
      .send(firstPostBody);

      await chai
      .request(app)
      .post('/cars')
      .send(secondPostBody);

    res = await chai
      .request(app)
      .get('/cars') as Response
  });

  it('Após inserir 2 carros no banco de dados, é possível retorná-los com sucesso', async() => {
    const firstCar = res.body[0];
    const secondCar = res.body[1];

    expect(res.body).to.have.length(2);

    // Assertions do primeiro carro do banco de dados:

    expect(firstCar).to.have.property('model', 'Ferrari Maranello')
    expect(firstCar).to.have.property('year', 1963);
    expect(firstCar).to.have.property('color', 'red');
    expect(firstCar).to.have.property('buyValue', 3500000);
    expect(firstCar).to.have.property('doorsQty', 2);
    expect(firstCar).to.have.property('seatsQty', 2);
    expect(firstCar).to.have.property('_id');
    expect(firstCar['_id']).to.have.length(24);

    // // Assertions do segundo carro do banco de dados:

    expect(secondCar).to.have.property('model', 'Lamborghini Gallardo')
    expect(secondCar).to.have.property('year', 2006);
    expect(secondCar).to.have.property('color', 'green');
    expect(secondCar).to.have.property('buyValue', 5000000);
    expect(secondCar).to.have.property('doorsQty', 2);
    expect(secondCar).to.have.property('seatsQty', 2);
    expect(secondCar).to.have.property('_id');
    expect(firstCar['_id']).to.have.length(24);
  });
});