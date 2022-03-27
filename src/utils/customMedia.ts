import { generateMedia } from 'styled-media-query'

export const screenSizes = {
  desktop: '1570px',
  tablet: '1366px',
  mobile: '960px'
}

const customMedia = generateMedia(screenSizes)

export const up = (key: keyof typeof screenSizes) => {
  return `@media (min-width: ${screenSizes[key]})`
}

export const down = (key: keyof typeof screenSizes) => {
  return `@media (max-width: ${screenSizes[key]})`
}

export const between = (
  start: keyof typeof screenSizes,
  end: keyof typeof screenSizes
) => {
  return `@media (min-width: ${screenSizes[start]}) and (max-width: ${screenSizes[end]})`
}

export default customMedia
