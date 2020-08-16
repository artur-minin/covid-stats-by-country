import { combineReducers } from 'redux'
import { availableCountries, countryStatistics } from './modules'

export default combineReducers({ availableCountries, countryStatistics })
