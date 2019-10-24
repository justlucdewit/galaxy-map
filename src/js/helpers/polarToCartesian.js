import { randomInt, random } from './random'

function mapping(n, imin, imax, omin, omax){
    return omin+(omax-omin)*(n-imin)/(imax-imin);
}

export const polarToCartesian = (radius = 10, angle = 0, degrees = true) => {
    if (degrees) {
        return polarToCartesian(radius, (angle * Math.PI) / 180, false)
    }
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);
    let z;

    if (radius < 20000){
        let mult = mapping(Math.pow(radius, 2), 0, Math.pow(20000, 2), 15, 1);
        z = 1000*random(-mult, mult);//randomInt(-1000, 1000)*mapping(radius, 0, 30000, 30, 1);
    }else{
        z = randomInt(-1000, 1000)*mapping(radius, 0, 250000, 1, 0);
    }
    return [x, y, z]
}
