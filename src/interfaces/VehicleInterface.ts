import { z } from 'zod';

// Código abaixo visto em:
// https://github.com/colinhacks/zod#strings
// https://github.com/colinhacks/zod#numbers
// https://github.com/colinhacks/zod#optionals

export const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;