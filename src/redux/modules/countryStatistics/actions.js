import {
  GET_TOTAL_STATISTICS_BY_COUNTRY_PENDING,
  GET_TOTAL_STATISTICS_BY_COUNTRY_SUCCEED,
  GET_TOTAL_STATISTICS_BY_COUNTRY_FAILED
} from './actionsTypes'
import countryStatisticsApi from '../../../app/api/countryStatistics'

export const getTotalCountryStatistics = country => dispatch => {
  dispatch({ type: GET_TOTAL_STATISTICS_BY_COUNTRY_PENDING })
  countryStatisticsApi
    .getTotalStatisticsByCountry(country)
    .then(({ data: days }) => {
      const formattedData = days.map(({ Active, Confirmed, Deaths, Recovered, Date }) => ({
        Active,
        Confirmed,
        Deaths,
        Recovered,
        Date
      }))

      dispatch({ type: GET_TOTAL_STATISTICS_BY_COUNTRY_SUCCEED, payload: formattedData })
    })
    .catch(error => {
      dispatch({ type: GET_TOTAL_STATISTICS_BY_COUNTRY_FAILED, error: error.message })
    })
}
