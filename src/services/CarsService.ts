import Service, { ServiceError } from '.';
import CarsModel from '../models/CarsModel';
import { Car, CarSchema } from '../interfaces/CarInterface';

class CarsService extends Service<Car> {
  constructor(model = new CarsModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default CarsService;
