import './index.css'
import { getHtmlElements } from './js/helpers/getHtmlElements'
import { galaxyConfig } from './js/constants'
import { generateGalaxy } from './js/helpers/generateGalaxy'
import { renderStars } from './js/helpers/renderStars'
import { download } from './js/helpers/download'
import { galaxyToCsv } from './js/helpers/galaxyToCsv'
import { createCircleRenderer, createStarManager } from './js/helpers/setStar'

const elements = getHtmlElements()
const galaxy = generateGalaxy(galaxyConfig, 500000, {
    twirlfactor: 300,
    coreRadius: 30000,
    strictness: 30,
    sides: 2
})

const contexts = {
    stars: elements.canvases.stars.getContext('2d'),
    circle: elements.canvases.circle.getContext('2d')
}

const { width, height } = elements.canvases.circle.getBoundingClientRect()

elements.canvases.circle.width = width
elements.canvases.circle.height = height

elements.canvases.stars.width = width
elements.canvases.stars.height = height

const zoom = 500

renderStars(contexts.stars, width, height, galaxy, zoom, false)

elements.buttons.downloadJson.onclick = () => {
    download(JSON.stringify(galaxy))
}

elements.buttons.downloadCsv.onclick = () => {
    download(galaxyToCsv(galaxy), 'galaxy-map', 'csv')
}

const circleRenderer = createCircleRenderer(
    contexts.circle,
    width,
    height,
    20,
    zoom
)

const starManager = createStarManager(galaxy, elements, circleRenderer)

elements.buttons.nextStar.onclick = starManager.increase
elements.buttons.previousStar.onclick = starManager.decrease
elements.buttons.findStar.onclick = starManager.find
