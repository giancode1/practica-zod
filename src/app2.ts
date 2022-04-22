//arrays
import {z} from 'zod';

const numberArraySchema = z.array(z.number());
type NumberArrayType = z.infer<typeof numberArraySchema>;

// numberArraySchema.parse([1, 2, 3, '2']); //ZodError
numberArraySchema.parse([1, 2, 3]);

////////
const UserSchema = z.object({
    name: z.string(),
    age: z.number().positive().min(18),
});

const usersSchema = z.array(UserSchema);

const result = usersSchema.parse([
    {name: 'John', age: 20},
    {name: 'Jane', age: 19},
]);
console.log(result);


const numbersArrSchema = z.array(z.number());
const stringsArrSchema = z.array(z.string());// o  z.string().array()
const datesArrSchema = z.date().array().optional(); 

type numbersArrType = z.infer<typeof numbersArrSchema>;
type stringsArrType = z.infer<typeof stringsArrSchema>;
type datesArrType = z.infer<typeof datesArrSchema>; // Date[] | undefined   //necesario general tsconfig.json para verificar tipos




