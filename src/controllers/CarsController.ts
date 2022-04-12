import { NextFunction, Request, Response } from 'express';
import { CarSchema } from '../interfaces/CarInterface';

class CarsController {
  public static async validateInfo(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) {
    try {
      const { body } = req;
      const data = CarSchema.parse(body);
      console.log(data);
    } catch (e) {
      console.error(e);
      res.status(400).json({ message: e });
    }
    next();
  }

  public static async newCar(req: Request, res: Response) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const newCarModel = {
      model,
      year,
      color,
      buyValue,
      seatsQty,
      doorsQty,
    };
    console.log(newCarModel);
    return res.status(200).json({ message: 'Ok' });
  }
}

export default CarsController;