import {z} from 'zod';

const stringSchema = z.string();

const result = stringSchema.safeParse(10); //ZodError, safeParse, validacion segura sin terminar el programa

console.log(result);

console.log('después del error'); //se ejeucta







