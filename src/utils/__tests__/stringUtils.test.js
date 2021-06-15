import { divideByThousands } from 'utils/stringUtils'

describe('stringUtils', () => {
  it('divideByThousands - formats clear integer', () => {
    const actual = divideByThousands(2500000)
    expect(actual).toEqual('2,500,000')
  })
  it('divideByThousands - formats with 2 decimals', () => {
    const actual = divideByThousands(2500000.123, 2)
    expect(actual).toEqual('2,500,000.12')
  })
})
