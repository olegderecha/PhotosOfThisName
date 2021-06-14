import { IMAGE_BASE_URL } from 'constants/endpointConstants'

export const getImageUrl = ({ server, id, secret, sizeSuffix = 'm' }) => {
  return `${IMAGE_BASE_URL}${server}/${id}_${secret}_${sizeSuffix}.jpg`
}
