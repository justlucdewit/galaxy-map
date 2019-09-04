import { gaussianRandom, gaussianSequence } from './gaussianRandom'
import { polarToCartesian } from './polarToCartesian'
import { random } from './random'
import { sigmoid } from './sigmoid'

const sequence = gaussianSequence(3000, 40000)

export const generateRandomStar = (name = 'Unknown object', rules) => {
    let innerRadius = sequence()
    let position = [0, 0]

    if (innerRadius <= rules.coreRadius) {
        const angle = random(0, Math.PI * 2)

        position = polarToCartesian(innerRadius, angle, false)
    } else {
        position = polarToCartesian(
            innerRadius,
            (Math.floor(Math.random() * rules.sides) * 360) / rules.sides +
                (innerRadius / 83000) * rules.twirlfactor -
                rules.twirlfactor +
                (gaussianRandom(0, rules.strictness) * 83000) / innerRadius
        )
    }

    return {
        position,
        name
    }
}
