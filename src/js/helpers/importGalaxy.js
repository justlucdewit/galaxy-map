/**
 * Helper to prevent defaults of an event
 *
 * @param {Event} event
 */
export const preventDefaults = event => {
    event.preventDefault()
}

/**
 * Helper to import a galaxy
 *
 * @param {Array<unknown>} galaxy
 * @param {HTMLDivElement} target
 * @param {string} className
 * @param {Function} callback
 */
export const createGalaxyImporter = (galaxy, target, className, callback) => {
    let droppingState = false

    const initialClassName = target.className

    const setDroppingState = (value = false) => () => {
        droppingState = value

        if (value) {
            target.className = `${initialClassName} ${className}`
        } else {
            target.className = initialClassName
        }
    }

    return {
        /** @param  {DragEvent} event*/
        drop: event => {
            preventDefaults(event)

            const files = Array.from(event.dataTransfer.files)

            if (!files.length) {
                return
            }

            setDroppingState(false)()

            const file = files[0]
            const reader = new FileReader()

            reader.onload = event => {
                /** @type { Array<unknown> } */
                const result = JSON.parse(event.target.result)

                galaxy.length = 0
                galaxy.push(...result)

                callback()
            }

            reader.readAsText(file)
        },
        dragEnter: setDroppingState(true),
        dragLeave: setDroppingState(false)
    }
}
