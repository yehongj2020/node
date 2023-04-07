import { faker } from '@faker-js/faker'
export const city = () => faker.address.cityName()
export const address = () => faker.address.streetAddress()
export const country = () => faker.address.country()
export const zipCode = () => faker.address.zipCode()
