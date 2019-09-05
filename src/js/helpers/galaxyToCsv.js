export const galaxyToCsv = (galaxy) => {
    let text = 'Name,Type,Mass,X,Y\r\n'

    for (const star of galaxy){
        text += `"${star.data.name}",${star.stats.type},${star.stats.mass},${star.data.position[0]},${star.data.position[1]}\n`
    }

    return text
}