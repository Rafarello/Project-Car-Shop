import { Car } from "../../../interfaces/CarInterface";
import { ServiceError } from "../../../services";

export const MOCK_ID = "62571e6e80abf4bd240c0e50"

class MockController {

  public static mockGoodBodyRequest = {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
    
  
  public static mockNewCar = {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    doorsQty: 4,
    seatsQty: 2,
    _id: "62572a6880abf4bd240c0e52"
  }

  // public static mockCreateBadRequest(): ServiceError {
  //   return JSON.parse(`"error" : {
  //     "issues": [
  //         {
  //             "code": "invalid_type",
  //             "expected": "number",
  //             "received": "undefined",
  //             "path": [
  //                 "doorsQty"
  //             ],
  //             "message": "The 'doorsQty' information is required"
  //         }
  //     ],
  //     "name": "ZodError"
  // }`)
  // }

  public static mockCreateInternalServerError() {
    return undefined;
  }
}

export default MockController;