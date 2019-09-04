import { gaussianRandom, gaussianSequence } from './gaussianRandom'
import { polarToCartesian } from './polarToCartesian'
import { random } from './random'

const sequence = gaussianSequence(3000, 30000)

export const generateRandomStar = (name = 'Unknown object', rules) => {
    const radius = sequence()
    let position = [0, 0]

    if (radius <= rules.coreRadius && random(0, 10) < rules.coreDensity) {
        position = polarToCartesian(radius, random(0, Math.PI * 2), false)
    } else {
        position = polarToCartesian(
            radius,
            (Math.floor(Math.random() * rules.sides) * 360) / rules.sides +
                (radius / 83000) * rules.twirlfactor -
                rules.twirlfactor +
                (gaussianRandom(0, rules.strictness) * 83000) / radius
        )
    }

    return {
        position,
        name
    }
}
