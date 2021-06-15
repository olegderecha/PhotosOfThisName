// Actions
import Actions from 'actions'

// Map
import { mapPhotoModel } from 'mappers/photoMap'

const initialState = {
  searchText: '123',
  isLoading: false,
  isRefreshing: false,
  data: {
    page: 1,
    pages: 1,
    total: null,
    photos: [],
  },
  error: null,
  warning: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      }
    case Actions.SEARCH_PHOTOS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: !!action.payload.isRefreshing,
        error: null,
        warning: null,
      }
    case Actions.SEARCH_PHOTOS_RECEIVED:
      const isFirstPage = action.payload.page === 1
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        data: {
          ...state.data,
          page: action.payload.page,
          pages: action.payload.pages,
          total: action.payload.total,
          photos: isFirstPage
            ? action.payload.photo.map(mapPhotoModel)
            : [...state.data.photos, ...action.payload.photo.map(mapPhotoModel)],
        },
        warning: !action.payload.photo.length ? 'No images were found' : null,
      }
    case Actions.SEARCH_PHOTOS_FAILED:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        error: action.payload,
        warning: null,
        data: {
          ...state.data,
          total: null,
        },
      }
    default:
      return state
  }
}
