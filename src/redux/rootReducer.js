import { combineReducers } from 'redux'
import availableCountries from './modules/availableCountries/reducer'
import countryStatistics from './modules/countryStatistics/reducer'

export default combineReducers({ availableCountries, countryStatistics })
