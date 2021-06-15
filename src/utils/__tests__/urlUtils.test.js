import { getImageUrl } from 'utils/urlUtils'

describe('stringUtils', () => {
  const server = 123456
  const id = 987654
  const secret = 123987

  it('stringUtils - formats url without sizeSuffix', () => {
    const actual = getImageUrl({ server, id, secret })
    expect(actual).toEqual('https://farm8.static.flickr.com/123456/987654_123987_m.jpg')
  })

  it('stringUtils - formats url with sizeSuffix', () => {
    const actual = getImageUrl({ server, id, secret, sizeSuffix: 'c' })
    expect(actual).toEqual('https://farm8.static.flickr.com/123456/987654_123987_c.jpg')
  })
})
