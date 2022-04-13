import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// Código abaixo visto em: 
// https://github.com/colinhacks/zod#extend

export const CarSchema = VehicleSchema.extend({

  doorsQty: z.number({
    required_error: 'The \'doorsQty\' information is required',
    invalid_type_error: 'The \'doorsQty\' information must be a number',
  })
    .gte(2, { message: '\'doorsQty\' must be equal or higher than 2' })
    .lte(4, { message: '\'doorsQty\' must be equal or lower than 4' }),

  seatsQty: z.number({
    required_error: 'The \'seatsQty\' information is required',
    invalid_type_error: 'The \'seatsQty\' information must be a number',
  })
    .gte(2, { message: '\'seatsQty\' must be equal or higher than 2' })
    .lte(7, { message: '\'seatsQty\' must be equal or lower than 7' }),
}).strip();

export const IdSchema = z.string().refine((val) => val.length === 24, {
  message: '\'id\' must be 24 characters long',
});

export type Car = z.infer<typeof CarSchema>;