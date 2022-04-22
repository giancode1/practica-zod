import {z} from 'zod'

const nameSchema = z.string()
const numberSchema = z.number()
const booleanSchema = z.boolean()
const objectSchema = z.object({
    name: nameSchema,
})
const arraySchema = z.array(numberSchema)
const undefinedSchema = z.undefined()
const nullSchema = z.null()

//const name = 100
//nameSchema.parse(name) //ZodError

const result = nameSchema.parse('Gian') 
console.log(result)




