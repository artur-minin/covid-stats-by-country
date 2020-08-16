import { queryGet } from './apiConfig'

export default {
  getStatisticsByCountry(country) {
    return queryGet(`/dayone/country/${country}`)
  },
  getStatisticsByCountryAndStatus(country, status) {
    return queryGet(`/dayone/country/${country}/status/${status}`)
  }
}
