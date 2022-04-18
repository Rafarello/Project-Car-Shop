import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';

import CarsModel from '../../../models/CarsModel';
import MockController from '../mock/MockController';

describe('Teste unitário do model da rota /cars', () => {
  // Mockando os Requests das funções do Model
  const newCarRequest = MockController.mockGoodBodyRequest;
  // Mockando as Responses das funções do Model
  const newCarResponse = MockController.mockNewCar;
  const allcarsResponse = MockController.mockAllCars;

  // Criando uma nova instância do Model
  const CarModel = new CarsModel()

  before(async () => {
    sinon.stub(CarModel, "create").resolves(newCarResponse);
    sinon.stub(CarModel, "read").resolves(allcarsResponse)

  });

  after(() => {
    sinon.restore();
  })

  it('Deve ser possível criar um carro e retornar as informações do banco de dados', async () => {
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

  it('Deve ser possível pegar do banco de dados todas as informações de todos os carros', async () => {
    const allcars = await CarModel.read();
    console.log(allcars);
    expect(allcars).to.deep.equal(allcarsResponse);
    expect(allcars).to.have.length(2);
  });

});