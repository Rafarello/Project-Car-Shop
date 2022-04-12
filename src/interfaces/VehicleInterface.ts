import { z } from 'zod';

// Código abaixo visto em:
// https://github.com/colinhacks/zod#strings
// https://github.com/colinhacks/zod#numbers
// https://github.com/colinhacks/zod#optionals
// # Tratativas de erros:
// https://github.com/colinhacks/zod#error-handling

export const VehicleSchema = z.object({
  model: z.string({
    required_error: 'The \'model\' information is required',
    invalid_type_error: 'The \'model\' information must be a string',
  })
    .min(3, { message: '\'model\' must be 3 or more characters long' }),

  year: z.number({
    required_error: 'The \'year\' information is required',
    invalid_type_error: 'The \'year\' information must be a number',
  })
    .gte(1900, { message: '\'year\' must be equal or higher than 1900' })
    .lte(2022, { message: '\'year\' must be equal or lower than 2022' }),

  color: z.string({
    required_error: 'The \'color\' information is required',
    invalid_type_error: 'The \'color\' information must be a string',
  })
    .min(3, { message: '\'model\' must be 3 or more characters long' }),

  status: z.boolean({
    required_error: 'The \'status\' information is required',
    invalid_type_error: 'The \'status\' information must be a boolean',
  }).optional(),
  
  buyValue: z.number({
    required_error: 'The \'buyValue\' information is required',
    invalid_type_error: 'The \'buyValue\' information must be a integer number',
  }).int(),
}).strip();

export type Vehicle = z.infer<typeof VehicleSchema>;