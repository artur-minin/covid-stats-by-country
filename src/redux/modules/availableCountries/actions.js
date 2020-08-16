import {
  GET_AVAILABLE_COUNTRIES_PENDING,
  GET_AVAILABLE_COUNTRIES_SUCCEED,
  GET_AVAILABLE_COUNTRIES_FAILED
} from './actionsTypes'
import availableCountriesApi from '../../../app/api/availableCountries'

export const getAvailableCountries = () => dispatch => {
  dispatch({ type: GET_AVAILABLE_COUNTRIES_PENDING })
  availableCountriesApi
    .then(response => {
      return response.json()
    })
    .then(countries => {
      const formattedData = countries.map(({ slug }) => slug)
      dispatch({ type: GET_AVAILABLE_COUNTRIES_SUCCEED, payload: formattedData })
    })
    .catch(error => {
      dispatch({ type: GET_AVAILABLE_COUNTRIES_FAILED, error: error.message })
    })
}
