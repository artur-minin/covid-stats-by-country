import { queryGet } from './apiConfig'

export default {
  getTotalStatisticsByCountry(country) {
    return queryGet(`/total/dayone/country/${country}`)
  }
}
