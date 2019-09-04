import { getRandomStarData } from './getRandomStarData'
import { generateRandomStar } from './generateRandomStar'

export const generateGalaxy = (config, starCount, rules) => {
    const stars = []

    for (let index = 0; index < starCount; index++) {
        const stats = getRandomStarData(config)

        stars.push({
            data: generateRandomStar(`Random star ${index}`, rules),
            stats
        })
    }

    return stars
}
