import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import CarsService from '../services/CarsService';

class CarsController extends Controller<Car> {
  private _route : string;

  constructor(
    service = new CarsService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const newCar = await this.service.create(body);
      
      if (!newCar) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in newCar) {
        return res.status(400).json(newCar);
      }
      return res.status(201).json(newCar);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.readOne(id);
      return car 
        ? res.json(car) : res.status(404).json({ error: this.errors.notFound });
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default new CarsController();