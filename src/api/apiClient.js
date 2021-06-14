import { API_BASE_URL, API_KEY } from 'constants/endpointConstants'

const apiUrl = (endpoint) => API_BASE_URL + endpoint

const baseArgs = {
  api_key: API_KEY,
  format: 'json',
  nojsoncallback: 1,
}

// get
export const get = (method, { ...args }) =>
  fetch(apiUrl(getEndpointStr({ method, ...baseArgs, ...args })), {
    method: 'GET',
  }).then((response) => response.json())

// get endpoint string
const getEndpointStr = (args) => {
  let argStr = '?'
  for (const key of Object.keys(args)) {
    argStr = `${argStr}${key}=${args[key]}&`
  }

  return argStr.slice(0, -1)
}
