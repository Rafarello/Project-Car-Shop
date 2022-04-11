import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// Código abaixo visto em: 
// https://github.com/colinhacks/zod#extend

export const CarSchema = VehicleSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type Car = z.infer<typeof CarSchema>;