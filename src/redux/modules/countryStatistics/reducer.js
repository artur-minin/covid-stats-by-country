import {
  GET_TOTAL_STATISTICS_BY_COUNTRY_PENDING,
  GET_TOTAL_STATISTICS_BY_COUNTRY_SUCCEED,
  GET_TOTAL_STATISTICS_BY_COUNTRY_FAILED
} from './actionsTypes'

const initialState = {
  days: [],
  pending: true,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_STATISTICS_BY_COUNTRY_PENDING:
      return {
        ...state,
        pending: true,
        error: null
      }
    case GET_TOTAL_STATISTICS_BY_COUNTRY_SUCCEED:
      return {
        ...state,
        days: action.payload,
        pending: false,
        error: null
      }
    case GET_TOTAL_STATISTICS_BY_COUNTRY_FAILED:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
