import { random } from './random'

export const getStarDataFromBound = bound => {
    return {
        mass: random(...bound.mass),
        type: bound.type
    }
}

export const getRandomStarData = config => {
    const randomNumber = random

    for (const bound of config.bounds) {
        if (randomNumber > bound.value) {
            return getStarDataFromBound(bound)
        }
    }

    return getStarDataFromBound(config.defaultBound)
}
