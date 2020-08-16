import {
  GET_AVAILABLE_COUNTRIES_PENDING,
  GET_AVAILABLE_COUNTRIES_SUCCEED,
  GET_AVAILABLE_COUNTRIES_FAILED
} from './actionsTypes'

const initialState = {
  countries: [],
  pending: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AVAILABLE_COUNTRIES_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      }
    case GET_AVAILABLE_COUNTRIES_SUCCEED:
      return {
        ...state,
        countries: action.payload,
        pending: false,
        error: null
      }
    case GET_AVAILABLE_COUNTRIES_FAILED:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
