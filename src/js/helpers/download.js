import { saveAs } from 'file-saver'

export const download = (
    text = '',
    name = 'galaxy-map',
    extension = 'json'
) => {
    const blob = new Blob([text])

    saveAs(blob, `${name}.${extension}`)
}
