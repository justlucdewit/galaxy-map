export const renderStars = (
    context,
    width = 100,
    height = 100,
    stars = [],
    zoom = 500,
    blend = true
) => {
    context.fillStyle = 'black'
    context.fillRect(0, 0, width, height)

    context.save()

    const scale = 0.7
    context.translate(width / 2, height / 2)

    if (blend) {
        context.globalCompositeOperation = 'lighter'
    }
    context.fillStyle = blend ? '#333333' : 'white'

    for (const star of stars) {
        context.fillRect(
            star.data.position[0] / zoom,
            star.data.position[1] / zoom,
            scale,
            scale
        )
    }

    context.restore()
}
