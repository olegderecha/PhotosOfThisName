// Actions
import Actions from 'actions'

// Map
import { mapPhotoModel } from 'mappers/photoMap'

const initialState = {
  contacts: {
    isLoading: false,
    data: [],
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      }
    case Actions.CONTACTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        contacts: {
          ...state.contacts,
          data: action.payload,
        },
      }
    default:
      return state
  }
}
