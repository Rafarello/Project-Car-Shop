import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';

import CarsModel from '../../../models/CarsModel';
import MockController from '../mock/MockController';

describe('Teste unitário do model da rota /cars', () => {
  const newCarRequest = MockController.mockGoodBodyRequest;
  const newCarResponse = MockController.mockNewCar;
  const CarModel = new CarsModel()

  before(async () => {
    sinon.stub(CarModel, "create").resolves(newCarResponse);

  });

  after(() => {
    sinon.restore();
  })

  it('Deve criar um carro e retornar as informações do banco de dados', async () => {
    const newCar = await CarModel.create(newCarRequest);
    expect(newCar).to.deep.equal(newCarResponse);
    expect(newCar).to.have.property('model', 'Ferrari Maranello');
    expect(newCar).to.have.property('year', 1963);
    expect(newCar).to.have.property('color', 'red');
    expect(newCar).to.have.property('buyValue', 3500000);
    expect(newCar).to.have.property('doorsQty', 2);
    expect(newCar).to.have.property('seatsQty', 2);
    expect(newCar).to.have.property('_id', '62572a6880abf4bd240c0e52');


  });

});