import { hexToRgba } from 'utils/colorUtils'

describe('colorUtils', () => {
  it('hexToRgba - opacity 0.3', () => {
    const actual = hexToRgba('#E1E5FE', 0.3)
    expect(actual).toEqual('rgba(225, 229, 254, 0.3)')
  })

  it('hexToRgba - opacity 0.8', () => {
    const actual = hexToRgba('#E1E5FE', 0.8)
    expect(actual).toEqual('rgba(225, 229, 254, 0.8)')
  })

  it('hexToRgba - opacity 0', () => {
    const actual = hexToRgba('#E1E5FE', 0)
    expect(actual).toEqual('rgb(225, 229, 254)')
  })

  it('hexToRgba - opacity 1', () => {
    const actual = hexToRgba('#E1E5FE', 1)
    expect(actual).toEqual('rgba(225, 229, 254, 1)')
  })
})
