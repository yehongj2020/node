import { DateTime } from 'luxon'

export const pastDate = () => {
    const value = new Date().valueOf()
    const n = 100000
    return new Date(value - Math.floor(Math.random() * n * n))
}

export const relativeDate = (date: Date = pastDate()) =>
    DateTime.fromJSDate(date).startOf('day').toRelative()

export const dayMonthYear = (date: Date = pastDate()) =>
    DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)
