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
    if (id.length !== 24 || id === undefined) {
      return res.status(400)
        .json({ error: this.errors.badRequest });
    }
    try {
      const car = await this.service.readOne(id);
      return car 
        ? res.status(200).json(car)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string }, Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res | null> => {
    const { id } = req.params;
    const { body } = req;
    try {
      const carUpdated = await this.service.update(id, body);
      if (!carUpdated) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      if ('error' in carUpdated) {
        return res.status(400).json(carUpdated);
      }
      return res.status(201).json(carUpdated);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const carDeleted = await this.service.delete(id);
      if (!carDeleted) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      if ('error' in carDeleted) {
        return res.status(400).json(carDeleted);
      }
      return res.status(204).json();
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default new CarsController();