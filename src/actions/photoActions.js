// Action Types
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
const SEARCH_PHOTOS_REQUESTED = 'SEARCH_PHOTOS_REQUESTED'
const SEARCH_PHOTOS_RECEIVED = 'SEARCH_PHOTOS_RECEIVED'
const SEARCH_PHOTOS_FAILED = 'SEARCH_PHOTOS_FAILED'

// Action Creators
const setSearchText = (payload) => ({
  type: SET_SEARCH_TEXT,
  payload,
})

const searchPhotosRequested = (payload) => ({
  type: SEARCH_PHOTOS_REQUESTED,
  payload,
})

const searchPhotoReceived = (payload) => ({
  type: SEARCH_PHOTOS_RECEIVED,
  payload,
})

const searchPhotoFailed = (payload) => ({
  type: SEARCH_PHOTOS_FAILED,
  payload,
})

export default {
  SET_SEARCH_TEXT,
  SEARCH_PHOTOS_REQUESTED,
  SEARCH_PHOTOS_RECEIVED,
  SEARCH_PHOTOS_FAILED,
  setSearchText,
  searchPhotosRequested,
  searchPhotoReceived,
  searchPhotoFailed,
}
