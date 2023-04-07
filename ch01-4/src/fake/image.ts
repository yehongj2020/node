import * as R from './random'
import * as G from './gender'

export const unsplashUrl = (
    category?: string,
    width?: number,
    height?: number
) => {
    const url = ['https://source.unsplash.com/random']
    if (width) {
        if (height) {
            url.push(`${width}x${height}`)
        } else {
            url.push(`${width}`)
        }
    }

    category && url.push(`?${category}`)
    return url.join('/')
}
export const image = (
    category = 'city',
    width: number = 1024 + R.random(100),
    height: number = 768 + R.random(50)
) => unsplashUrl(category, width, height)
export const avatar = (size = 50, gender: G.Gender = G.gender()) => {
    const randomSize = size + R.random(40)
    return unsplashUrl(gender, randomSize, randomSize)
}
