export const getHtmlElements = () => {
    return {
        canvases: {
            stars: document.getElementById('star-canvas'),
            circle: document.getElementById('circle-canvas')
        },
        buttons: {
            downloadJson: document.getElementById('download-json'),
            downloadCsv: document.getElementById('download-csv'),
            nextStar: document.getElementById('next-star'),
            previousStar: document.getElementById('previous-star'),
            findStar: document.getElementById('find-star'),
            randomStar: document.getElementById('Random-star')
        },
        inputs: {
            starIndex: document.getElementById('find-star-input')
        },
        fields: {
            name: document.getElementById('star-name'),
            mass: document.getElementById('star-mass'),
            type: document.getElementById('star-type'),
            positionX: document.getElementById('star-position-x'),
            positionY: document.getElementById('star-position-y')
        }
    }
}
