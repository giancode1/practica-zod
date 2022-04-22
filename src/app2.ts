import {z} from 'zod';

const numberArraySchema = z.array(z.number());
type NumberArrayType = z.infer<typeof numberArraySchema>;

// numberArraySchema.parse([1, 2, 3, '2']); //ZodError
numberArraySchema.parse([1, 2, 3]);




