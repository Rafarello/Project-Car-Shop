import Service, { ServiceError } from '.';
import CarsModel from '../models/CarsModel';
import { Car, CarSchema, IdSchema } from '../interfaces/CarInterface';

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

  update = async (id: string, obj: Car): Promise<Car | null | ServiceError> => {
    const parsedID = IdSchema.safeParse(id);
    if (!parsedID.success) {
      return { error: parsedID.error };
    }
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const data = await this.model.update(id, obj);    
    return data;
  };

  delete = async (id: string): Promise<Car | null | ServiceError> => {
    const parsedID = IdSchema.safeParse(id);
    if (!parsedID.success) {
      return { error: parsedID.error };
    }
    const data = await this.model.delete(id);    
    return data;
  };
}

export default CarsService;
