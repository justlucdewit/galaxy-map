import { randomInt } from './random'

export const createCircleRenderer = (
    context,
    width,
    height,
    radius,
    zoom
) => position => {
    context.fillStyle = 'black'
    context.strokeStyle = 'red'
    context.lineWidth = '5'
    context.clearRect(0, 0, width, height)

    context.save()

    context.translate(width / 2, height / 2)

    context.beginPath()
    context.arc(position[0] / zoom, position[1] / zoom, radius, 0, 2 * Math.PI)
    context.stroke()

    context.restore()
}

export const createStarSetter = (galaxy, { fields }, renderer) => {
    return (index = 0) => {
        const star = galaxy[index]

        fields.name.innerHTML = star.data.name
        fields.positionX.innerHTML = star.data.position[0]
        fields.positionY.innerHTML = star.data.position[1]
        fields.positionZ.innerHTML = star.data.position[2]
        fields.mass.innerHTML = star.stats.mass
        fields.type.innerHTML = star.stats.type

        renderer(star.data.position)

        return index
    }
}

export const createStarManager = (galaxy, elements, renderer) => {
    const setStar = createStarSetter(galaxy, elements, renderer)

    let currentStar = setStar()

    return {
        increase: () => {
            currentStar = setStar((currentStar + 1) % galaxy.length)
        },
        decrease: () => {
            currentStar = setStar(
                (galaxy.length + currentStar - 1) % galaxy.length
            )
        },
        find: () => {
            try {
                const starIndexInputValue = Number(
                    elements.inputs.starIndex.value
                )

                // make the input positive and in the interval [0,galaxy.length)
                const correctedIndex =
                    ((starIndexInputValue % galaxy.length) + galaxy.length) %
                    galaxy.length

                currentStar = setStar(correctedIndex)
            } catch {}
        },
        random: () => {
            currentStar = setStar(randomInt(0, galaxy.length))
        }
    }
}
