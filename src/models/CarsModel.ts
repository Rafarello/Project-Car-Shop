import { Schema, model as createModel } from 'mongoose';
import MongoModel from './MongoModel';
import { Car } from '../interfaces/CarInterface';

const CarsModelSchema = new Schema<Car>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarsModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', CarsModelSchema)) {
    super(model);
  }
}

export default CarsModel;