export const getHtmlElements = () => {
    return {
        canvases: {
            stars: document.getElementById('star-canvas'),
            circle: document.getElementById('circle-canvas')
        },
        buttons: {
            downloadJson: document.getElementById('download-json'),
            downloadCsv: document.getElementById('download-csv')
        }
    }
}
