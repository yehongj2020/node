import { faker } from '@faker-js/faker'
import * as G from './gender'
import * as R from './random'

export const UUID = () => faker.datatype.uuid()
export const name = (gender: G.Gender = G.gender()) =>
    faker.name.fullName({ sex: gender })
export const email = () => faker.internet.email()
export const jobTitle = () => faker.name.jobTitle()
export const age = () => R.random(70) + 20
export const phoneNumber = () => faker.phone.number()
