import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';

import CarsModel from '../../../models/CarsModel';
import MockController from '../mock/MockController';

describe('Teste unitário do model da rota /cars', () => {

  // Mock do teste 01
  const newCarRequest = MockController.mockGoodBodyRequest;
  const newCarResponse = MockController.mockNewCar;

  // Mock do teste 02
  const allcarsResponse = MockController.mockAllCars;

  // Mock do teste 03
  const findOneCarResponse = MockController.mockNewCar; 
  const findOneCarRequest = findOneCarResponse._id;

  // Mock do teste 04
  const updateOneCar = MockController.mockNewCar;
  const updateOneCarId = updateOneCar._id;
  const updatedCarResponse = MockController.mockUpdatedCar;

  // Criando uma nova instância do Model
  const CarModel = new CarsModel()

  before(async () => {
    sinon.stub(CarModel, "create").resolves(newCarResponse);
    sinon.stub(CarModel, "read").resolves(allcarsResponse);
    sinon.stub(CarModel, "readOne").resolves(findOneCarResponse);
    sinon.stub(CarModel, "update").resolves(updatedCarResponse);
  });

  after(() => {
    sinon.restore();
  })

  it('01 - Deve ser possível criar um carro e retornar as informações do banco de dados', async () => {
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

  it('02 - Deve ser possível pegar do banco de dados todas as informações de todos os carros', async () => {
    const allcars = await CarModel.read();
    expect(allcars).to.deep.equal(allcarsResponse);
    expect(allcars).to.have.length(2);
  });

  it('03 - Deve ser possível pegar do banco de dados todas as informações de um carro específico', async () => {
    const oneCar = await CarModel.readOne(findOneCarRequest);
    expect(oneCar).to.deep.equal(findOneCarResponse);
    expect(oneCar).to.have.property('model', 'Ferrari Maranello');
    expect(oneCar).to.have.property('year', 1963);
    expect(oneCar).to.have.property('color', 'red');
    expect(oneCar).to.have.property('buyValue', 3500000);
    expect(oneCar).to.have.property('doorsQty', 2);
    expect(oneCar).to.have.property('seatsQty', 2);
    expect(oneCar).to.have.property('_id', '62572a6880abf4bd240c0e52');
  });

  it('04 - Deve ser possível atualizar as informações de um carro específico', async () => {
    const updatedCar = await CarModel.update(updateOneCarId, updateOneCar);    
    expect(updatedCar).to.deep.equal(updatedCarResponse);
    expect(updatedCar).to.have.property('model', 'Lamborghini Gallardo');
    expect(updatedCar).to.have.property('year', 2006);
    expect(updatedCar).to.have.property('color', 'green');
    expect(updatedCar).to.have.property('buyValue', 5000000);
    expect(updatedCar).to.have.property('doorsQty', 2);
    expect(updatedCar).to.have.property('seatsQty', 2);
    expect(updatedCar).to.have.property('_id', '62572a6880abf4bd240c0e52');
  });
  

});