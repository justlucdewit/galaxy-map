export const random = (min, max) => {
    return min + Math.random() * (max - min)
}

export const randomInt = (min, max) => {
    return Math.floor(random(min, max))
}
