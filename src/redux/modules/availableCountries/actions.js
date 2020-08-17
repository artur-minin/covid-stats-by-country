import {
  GET_AVAILABLE_COUNTRIES_PENDING,
  GET_AVAILABLE_COUNTRIES_SUCCEED,
  GET_AVAILABLE_COUNTRIES_FAILED
} from './actionsTypes'
import availableCountriesApi from '../../../app/api/availableCountries'

export const getAvailableCountries = () => dispatch => {
  dispatch({ type: GET_AVAILABLE_COUNTRIES_PENDING })
  availableCountriesApi
    .getCountries()
    .then(({ data: countries }) => {
      const formattedData = countries.map(({ Country, Slug }) => ({ Country, Slug }))
      dispatch({ type: GET_AVAILABLE_COUNTRIES_SUCCEED, payload: formattedData })
    })
    .catch(error => {
      dispatch({ type: GET_AVAILABLE_COUNTRIES_FAILED, error: error.message })
    })
}
