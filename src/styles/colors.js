import { hexToRgba } from 'utils/colorUtils'

const LIGHT = '#FFFFFF'
const DARK = '#000000'

const SCREEN_BACKGROUND_GRADIENT_TOP = '#FCF8F0'
const SCREEN_BACKGROUND_GRADIENT_MIDDLE = '#FFFFFF'
const SCREEN_BACKGROUND_GRADIENT_BOTTOM = '#E1E5FE'

export default {
  STATUS_BAR_STYLE: 'dark-content',
  LIGHT,
  DARK,

  TEXT_PRIMARY: '#336799',
  TEXT_PLACEHOLDER: hexToRgba('#336799', 0.4),

  LOADING_INDICATOR: '#336799',
  LOADING_INDICATOR_LIGHT: '#FFFFFF',

  SCREEN_BACKGROUND: [
    SCREEN_BACKGROUND_GRADIENT_TOP,
    SCREEN_BACKGROUND_GRADIENT_MIDDLE,
    SCREEN_BACKGROUND_GRADIENT_BOTTOM,
  ],

  BACKGROUND_COLOR_1: '#E6F0F9',
  BACKGROUND_COLOR_2: '#FFFFFF',

  BORDER_COLOR_1: '#9FB6CE',
  BORDER_COLOR_2: '#AEC1D6',
}
