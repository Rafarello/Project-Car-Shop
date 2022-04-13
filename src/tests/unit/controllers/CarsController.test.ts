import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarsServices from '../../../services/CarsService'
import MockController from '../mock/MockController'


import server from '../../../index'
import { Response } from 'supertest';
import CarsController from '../../../controllers/CarsController';

chai.use(chaiHttp);

const { expect } = chai;
const app = server.getApp()

describe('Testa se é possível criar um novo carro no banco de dados com os dados corretos', () => {
  
  const body = MockController.mockGoodBodyRequest;
  let res: Response;

  before(async () => {
    res = await chai
      .request(app)
      .post('/cars')
      .send(body) as Response    

    sinon
      .stub(CarsController.service, "create")
      .resolves(MockController.mockCreateCompleted());
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
    expect(res.body['_id']).to.have.length(24)
  });

});