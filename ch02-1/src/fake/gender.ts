import * as R from './random'
import * as A from './array'
export type Gender = 'male' | 'female';
export const gender = (): Gender => (R.random(10) % 2 ? 'male' : 'female')
export const genderArray = (length: number): Gender[] =>
    A.makeArray(length).map(gender)
