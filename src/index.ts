import { z } from 'zod'

const nameSchema = z.string()
const numberSchema = z.number()
const booleanSchema = z.boolean()

const arraySchema = z.array(numberSchema)
const undefinedSchema = z.undefined()
const nullSchema = z.null()

//const name = 100
//nameSchema.parse(name) //ZodError

const result = nameSchema.parse('Gian')
console.log(result)

const UserSchema = z.object({
    name: nameSchema,
    email: z.string().email(),
    phone: z.number().positive(),
})

const addressSchema = z.object({
    street: z.string(),
    city: z.string(),
})

const UserCitySchema = UserSchema.merge(addressSchema) //merge: combina los esquemas

type UserType = z.infer<typeof UserSchema>
type UserCityType = z.infer<typeof UserCitySchema>

const User1: UserType = {
    name: 'Gian',
    email: 'gian@gmail.com',
    phone: 123456789,
    //age:20
}

const result1 = UserSchema.parse(User1)
console.log('UserSchema:', result1)


const UserCity: UserCityType = {
    ...User1,
    street: 'Calle 123',
    //city: 'Ciudad',  //path:[city]  , message: required
}
const result2 = UserCitySchema.parse(UserCity)
console.log('UserCitySchema:', result2)


console.log('luego del error') //no se ejecuta