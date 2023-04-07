import { faker } from '@faker-js/faker'
import * as R from './random'
import * as A from './array'
export const sentences = () => faker.lorem.sentence()
export const paragraphs = (sentences = R.random(3) + 1) =>
    A.range(0, sentences)
        .map(() => faker.lorem.paragraph())
        .join('\n\n')
