import { randomInt } from './random'

export const polarToCartesian = (radius = 10, angle = 0, degrees = true) => {
    if (degrees) {
        return polarToCartesian(radius, (angle * Math.PI) / 180, false)
    }

    return [radius * Math.cos(angle), radius * Math.sin(angle), randomInt(-radius/2, radius/2)]
}
