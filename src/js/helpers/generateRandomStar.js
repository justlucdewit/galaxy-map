import { gaussianRandom, gaussianSequence } from './gaussianRandom'
import { polarToCartesian } from './polarToCartesian'
import { random } from './random'

const sequence = gaussianSequence(3000, 30000)

export const generateRandomStar = (name = 'Unknown object', rules) => {
    const innerRadius = sequence()
    const outerRadius = sequence()

    let position = [0, 0]

    if (innerRadius <= rules.coreRadius) {
        const angle = random(0, Math.PI * 2)
        let difference = outerRadius - innerRadius

        if (difference > rules.differenceLimit) {
            difference = rules.differenceLimit
        }

        const currentRadius =
            ((angle * difference) / (Math.PI * 2)) % (difference / rules.sides)

        position = polarToCartesian(
            innerRadius + currentRadius,
            angle + Math.PI / rules.sides,
            false
        )
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
