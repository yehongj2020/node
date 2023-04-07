import * as F from './fake'

const fakeDatum = F.genderArray(10).map((gender) => ({
    name: F.name(gender),
    email: F.email(),
    age: F.age(),
    uuid: F.UUID(),
    date: F.relativeDate(),
    dayMonthYear: F.dayMonthYear(),
    image: F.image('office'),
    avatar: F.avatar(50, gender),
}))
console.log(fakeDatum)
