import './style.css'
import { getHtmlElements } from './js/helpers/getHtmlElements'
import { galaxyConfig } from './js/constants'
import { generateGalaxy } from './js/helpers/generateGalaxy'
import { renderStars } from './js/helpers/renderStars'

const elements = getHtmlElements()
const galaxy = generateGalaxy(galaxyConfig, 100000, {
    twirlfactor: 200,
    coreRadius: 20000,
    strictness: 7,
    sides: 2,
    differenceLimit: 10000
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

renderStars(contexts.stars, width, height, galaxy, false)
