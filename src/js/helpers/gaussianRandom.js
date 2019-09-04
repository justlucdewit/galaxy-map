/**
 * From: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve/40044129
 */
export const gaussianRandom = (mean, standardDeviation) => {
    let x1, x2, w
    do {
        x1 = 2.0 * Math.random() - 1.0
        x2 = 2.0 * Math.random() - 1.0
        w = x1 * x1 + x2 * x2
    } while (w >= 1.0)
    w = Math.sqrt((-2.0 * Math.log(w)) / w)
    const y1 = x1 * w

    const retval = mean + standardDeviation * y1
    if (retval > 0) return retval
    return -retval
}

// returns a gaussian random function with the given mean and stdev.
export const gaussianSequence = (mean, standardDeviation) => {
    let y2
    let use_last = false

    return () => {
        let y1
        if (use_last) {
            y1 = y2
            use_last = false
        } else {
            let x1, x2, w
            do {
                x1 = 2.0 * Math.random() - 1.0
                x2 = 2.0 * Math.random() - 1.0
                w = x1 * x1 + x2 * x2
            } while (w >= 1.0)
            w = Math.sqrt((-2.0 * Math.log(w)) / w)
            y1 = x1 * w
            y2 = x2 * w
            use_last = true
        }

        const retval = mean + standardDeviation * y1
        if (retval > 0) return retval
        return -retval
    }
}
