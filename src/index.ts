import {z} from 'zod'

const nameSchema = z.string()
const numberSchema = z.number()
const booleanSchema = z.boolean()

const arraySchema = z.array(numberSchema)
const undefinedSchema = z.undefined()
const nullSchema = z.null()

const UserSchema = z.object({
    name: nameSchema,
    email: z.string().email(),
    phone: z.number().positive(),
})
//const name = 100
//nameSchema.parse(name) //ZodError

const result = nameSchema.parse('Gian') 
console.log(result)


type UserType = z.infer<typeof UserSchema>

const User1: UserType = {
    name: 'Gian',
    email: 'gian@gmail.com',
    phone: 123456789,
    //age:20
}

const reulst2 = UserSchema.parse(User1)

